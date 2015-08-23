var webpack = require("webpack");
var merge = require("webpack-merge");

var common = require("./webpack.common");
var mergeCommon = merge.bind(null, common);
var BuildConstants = require("./build-constants");

var defaultDefs = require("./buildDefinitions");

var defs = merge(defaultDefs, {
  "process.env": {
    "NODE_ENV": JSON.stringify("production")
  }
});

module.exports = mergeCommon({
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ "babel?stage=1" ], exclude: [ BuildConstants.NODE_MODULES ] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(defs),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});