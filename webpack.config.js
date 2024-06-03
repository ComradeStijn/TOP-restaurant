const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // HTML loader
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // CSS loaders
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Image loaders
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin configuration
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
    }),
  ],
};