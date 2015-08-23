var webpack = require("webpack");
var merge = require("webpack-merge");
var common = require("./webpack.common");
var mergeCommon = merge.bind(null, common);

var BuildConstants = require("./build-constants");

var defaultDefs = require("./buildDefinitions");
var port = defaultDefs["process.env"]["PORT"];

module.exports = mergeCommon({
  devTool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:" + port
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: [ "babel?stage=1" ], include: BuildConstants.ENTRY_FOLDER }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(defaultDefs),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    stats: {
      progress: true,
      colors: true
    },
    port: port,
    contentBase: BuildConstants.OUTPUT,
    historyApiFallback: true
  }
});