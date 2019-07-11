const webpack = require('webpack');

module.exports = {
  configureWebpack: (config) => {
    config.entry = {
      // Changing entrypath to './src/main.js' does work.
      app: './src/main',
    }

    config.plugins.push(
      new webpack.IgnorePlugin({
        checkContext(context) {
          console.log('Context:\n\t', context);
          return false;
        },

        checkResource (resource) {
          console.log('Resource:\n\t', resource);
          return true;
        }
      })
    )
  },
}
