const path = require('path');

module.exports = {
  entry: './src/firenice.js',
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'firenice.js',
    path: path.resolve(__dirname, 'dist'),
    library: { name: 'FireNIce', type: 'var' },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
};
