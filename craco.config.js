const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
  //   less
  plugins: [
    {
      plugin: CracoLessPlugin,
      //   options: {
      //     lessLoaderOptions: {
      //       lessOptions: {
      //         modifyVars: {}, // 在这里覆盖Ant Design的Less变量
      //         javascriptEnabled: true,
      //       },
      //     },
      //   },
    },
  ],
};
