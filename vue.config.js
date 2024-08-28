const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
    },
  },
});
