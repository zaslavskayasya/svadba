const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const htmlFiles = fs.readdirSync(path.resolve(__dirname, 'src'))
  .filter(file => file.endsWith('.html'))
  .map(file => new HtmlWebpackPlugin({
    filename: file,
    template: `./src/${file}`,

  }));

module.exports = {
  entry: './src/scss/style.scss',
  output: {
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    ...htmlFiles,
    new CopyWebpackPlugin({
        patterns: [
          { from: 'src/images', to: 'images', noErrorOnMissing: true },
          { from: 'src/fonts', to: 'fonts', noErrorOnMissing: true },
          { from: 'src/js', to: 'js', noErrorOnMissing: true },
        ],
      }),      
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    watchFiles: {
        paths: ['src/**/*.html', 'src/js/**/*.js', 'src/scss/**/*.scss'],
        options: {
          usePolling: true,
        },
      },      
    port: 3000,
    open: true,
  },
  mode: 'development',
  devtool: 'source-map',
};
