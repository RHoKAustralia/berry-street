var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: [
    "./src/app.jsx"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
        loaders: [
          'transform-loader/cacheable?brfs',
          'transform-loader/cacheable?packageify'
        ]
    }, 
    {
      test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
      loader: 'transform-loader/cacheable?ejsify'
    }, 
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
