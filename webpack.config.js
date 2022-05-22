const webpack = require("webpack");

module.exports = {
  target: "node",
  resolve: {
    fallback: {
      assert: false,
    },
  },
};
