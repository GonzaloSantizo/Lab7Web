const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Logic.js',
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '[name].bundle.js',
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({ 
    template: './src/index.html',
    filename: 'index.html'
  }
  ), new HtmlWebpackPlugin({
    template: './src/LibrosViejos/popular.html',
    filename: 'popular.html'
  }), new HtmlWebpackPlugin({
    template: './src/MyStory/NewReleases.html',
    filename: 'NewReleases.html'
  }), new HtmlWebpackPlugin({
    template: './src/MyStory/MyStorypt0.html',
    filename: 'MyStorypt0.html'
  }), new HtmlWebpackPlugin({
    template: './src/MyStory/WakeUp/Wake.html',
    filename: 'Wake.html'
  }), new HtmlWebpackPlugin({
    template: './src/MyStory/WakeUp/driving/Drive.html',
    filename: 'Drive.html'
  }) ],
  module: {
        rules: [
          {
            test: /.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader",

          },
        ],
      },
};
