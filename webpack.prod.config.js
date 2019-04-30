const path = require('path');

module.exports = {
    entry: './src/firenice.js',
    devtool: false,
    mode: 'production',
    watch: false,
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'firenice.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};
