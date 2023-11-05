const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // option: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { "@primary-color": "#1DA57A" },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // components: resolve("src/components"),
      // utils: resolve("src/utils"),
    },
  },
};
