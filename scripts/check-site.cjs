const assert = require('node:assert/strict');
const { once } = require('node:events');
const { mkdtemp, readdir, readFile, rm, symlink } = require('node:fs/promises');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const vm = require('node:vm');
const httpServer = require('http-server');

async function files(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const relative = prefix + entry.name;
    return entry.isDirectory() ? files(join(directory, entry.name), relative + '/') : [relative];
  }));
  return nested.flat();
}

async function checkSite() {
  const dist = resolve(__dirname, '../dist');
  const siteFiles = await files(dist);
  assert(siteFiles.includes('index.html'), 'Run pnpm build before checking the site');
  assert(siteFiles.includes('editor.html'), 'Editor page is missing from the build');

  // Use a real static server, with the same build at the root and under a project path.
  const fixture = await mkdtemp(join(tmpdir(), 'fire-n-ice-site-check.'));
  const server = httpServer.createServer({ root: fixture, cache: -1, showDir: false });
  try {
    for (const entry of await readdir(dist, { withFileTypes: true })) {
      await symlink(join(dist, entry.name), join(fixture, entry.name), entry.isDirectory() ? 'junction' : 'file');
    }
    await symlink(dist, join(fixture, 'fire-n-ice'), 'junction');
    server.listen(0, '127.0.0.1');
    await once(server.server, 'listening');
    const origin = `http://127.0.0.1:${server.server.address().port}`;

    for (const base of ['/', '/fire-n-ice/']) {
      for (const file of siteFiles) {
        const url = new URL(base + file, origin);
        const response = await fetch(url);
        assert.equal(response.status, 200, `Missing built file: ${url}`);
        await response.arrayBuffer();
      }
      for (const page of ['index.html', 'editor.html']) {
        const pageUrl = new URL(base + page, origin);
        const html = await (await fetch(pageUrl)).text();
        const references = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)];
        for (const [, reference] of references) {
          const url = new URL(reference, pageUrl);
          if (url.origin !== origin || reference.startsWith('#')) continue;
          assert(url.pathname.startsWith(base), `Asset escapes site base: ${reference} in ${pageUrl}`);
          const response = await fetch(url);
          assert.equal(response.status, 200, `Broken page reference: ${url}`);
          await response.arrayBuffer();
        }
      }
      console.log(`Verified ${siteFiles.length} built files and page references at ${base}`);
    }

    // The reusable library must still load as a classic script for Solomon.
    const context = vm.createContext({});
    vm.runInContext(await readFile(join(dist, 'scripts/firenice.min.js'), 'utf8'), context);
    for (const name of ['Game', 'Engine', 'Scene', 'Resources', 'loadGameResources', 'Teleport']) {
      assert.equal(typeof context.FireNIce[name], 'function', `Missing library export: ${name}`);
    }
    console.log('Verified the classic FireNIce library API');
  } finally {
    await new Promise(resolveClose => server.close(resolveClose));
    await rm(fixture, { recursive: true, force: true });
  }
}

checkSite().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
