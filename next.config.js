
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {

  sentry: {
    // tunnelRoute: "/monitoring",
    // disableClientWebpackPlugin: true,
    // disableServerWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps:false,
  },
  // distDir: 'build',
  // assetPrefix: "/testing"
  // productionBrowserSourceMaps: true,

}
const sentryWebpackPluginOptions = {

  release: "jan152024",
  // dist: "5",
  silent: false,
  ignore: [],
  configFile: "sentry.properties"

};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);


// module.exports = (moduleExports)