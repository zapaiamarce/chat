const withOffline = require("next-offline");
require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

const wpConfig = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};
module.exports = withOffline(wpConfig);
