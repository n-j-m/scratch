var BuildConstants = require("./build-constants");

module.exports = {
  "process.env": {
    PORT: process.env.PORT || BuildConstants.DEFAULT_PORT
  }
};