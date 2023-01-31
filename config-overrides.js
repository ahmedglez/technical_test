/* config-overrides.js */
const webpack = require("webpack");
const BabelPluginImport = require("babel-plugin-import");
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    url: require.resolve("url"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util/"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );
  config.plugins.push(
    new webpack.ProvidePlugin(
      {
        libraryName: "@mui/material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "core"
    )
  );
   config.plugins.push(
     new webpack.ProvidePlugin(
       {
         libraryName: "@mui/icons-material",
         libraryDirectory: "",
         camel2DashComponentName: false,
       },
       "icons"
     )
   );

  return config;
};
