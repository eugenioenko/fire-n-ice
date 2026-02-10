# Fire 'n Ice

> A modern remake of the classic NES puzzle-platformer, featuring a sleek retro-inspired interface, mobile support, and a built-in level editor.

## [Play Now](https://eugenioenko.github.io/fire-n-ice/)

[![Screenshot](https://eugenioenko.github.io/fire-n-ice/images/thumbnail.png)](https://eugenioenko.github.io/fire-n-ice/)

If you are interested in the online version repository:
[Solomon online](https://github.com/eugenioenko/solomon)

## Table of Contents

- [About](#about)
- [Features](#features)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Level Editor](#level-editor)
- [Development](#development)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## About

Fire 'n Ice is a faithful remake of the beloved NES puzzle game (also known as Solomon's Key 2). Guide your character through challenging levels, creating and destroying ice blocks to extinguish all the fires and advance to the next stage.

This project brings the classic gameplay to modern browsers with:
- A modern UI with retro pixel-art aesthetics
- Full mobile/touch support
- CRT scanline effects for authentic retro feel
- A powerful level editor for creating custom puzzles

## Features

- **31 Challenging Levels** - Progressively difficult puzzles to solve
- **Modern Retro Design** - Sleek interface with pixel fonts, neon glows, and CRT effects
- **Mobile Support** - Touch-friendly D-pad and action buttons for playing on phones/tablets
- **Responsive Layout** - Adapts seamlessly from desktop to mobile
- **Level Editor** - Create, test, and export your own custom levels
- **Multiple Themes** - Various visual themes for level variety
- **Sound Effects & Music** - Authentic retro audio experience

## How to Play

Your goal is to extinguish all fires on each level by pushing ice blocks into them.

### Game Rules

- Create ice blocks one tile below your position
- Push only one ice block at a time
- Climb up one tile height
- Fall any distance without damage
- Avoid touching fires directly
- Cannot create ice inside a fire
- Cannot move while pushing ice

## Controls

### Desktop

| Key | Action |
|-----|--------|
| ← → | Move left/right |
| ↓ / Space | Create or destroy ice block |
| Enter | Restart level |
| Esc | Pause / Options menu |
| M | Toggle music |
| S | Toggle sound effects |

### Mobile

- **D-Pad** - Move in any direction
- **ICE Button** - Create or destroy ice block
- **↺ Button** - Restart level

## Level Editor

Create your own puzzles with the built-in level editor:

**[Open Level Editor](https://eugenioenko.github.io/fire-n-ice/editor.html)**

### Editor Features

- Visual tile placement with game sprites
- 10 different visual themes
- Keyboard shortcuts for fast editing
- Click-and-drag for walls and erasing
- Export levels as JSON
- Load and modify existing levels
- Real-time coordinate display

### Adding Custom Levels

1. Design your level in the editor
2. Click "Export" to generate JSON
3. Copy the JSON output
4. Add it to `/src/levels.js`
5. Rebuild the project

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/eugenioenko/fire-n-ice.git
cd fire-n-ice

# Install dependencies
pnpm install

# Start development server
pnpm run serve

# Or build for production
pnpm run build
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Development build with watch mode |
| `pnpm run serve` | Dev server with hot reload at localhost:8080 |
| `pnpm run build` | Production build (minified) |
| `pnpm run lint` | Run ESLint |
| `pnpm test` | Run Jest tests |

### Tech Stack

- **Vanilla JavaScript** - No frameworks, pure JS
- **HTML5 Canvas** - Game rendering
- **Webpack** - Module bundling
- **ESLint + Prettier** - Code quality

## Roadmap

### Planned Features

- [ ] **User Accounts** - Save progress across devices
- [ ] **Cloud Level Storage** - Save and share custom levels online
- [ ] **Level Browser** - Discover and play community-created levels
- [ ] **Level Ratings** - Rate and review levels from other players
- [ ] **Leaderboards** - Compete for fastest completion times
- [ ] **Achievement System** - Unlock badges for completing challenges

### Fire 'n Ice Platform

The long-term vision is to evolve Fire 'n Ice into a **level-sharing platform** where players can:

1. **Create** - Design custom levels with the visual editor
2. **Share** - Publish levels for the community to play
3. **Discover** - Browse and play levels created by others
4. **Compete** - Race for the best times on popular levels
5. **Connect** - Follow favorite level creators

This will transform Fire 'n Ice from a single game into a creative platform for puzzle enthusiasts.

## Contributing

Contributions are welcome! Here's how to get involved:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to your branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Ways to Contribute

- Add new levels
- Improve game mechanics
- Fix bugs
- Enhance the UI/UX
- Improve mobile experience
- Add new game elements
- Write documentation

## Credits

- **Game Development** - Eugene Yakhnenko
- **Music Composition** - Margaret Nelson
- **Original Game** - Tecmo (NES, 1992)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
