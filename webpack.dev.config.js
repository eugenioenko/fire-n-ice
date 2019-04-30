const path = require('path');

module.exports = {
    entry: './src/firenice.js',
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'firenice.js',
        path: path.resolve(__dirname, 'dist')
    }
};
