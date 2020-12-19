const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@menu-actve-bg":"transparent"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
