const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "docs",
  pages: {
    index: {
      entry: "src/main.js",
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
      title: "Yiran Li's Personal Website",
    },
  },
});
