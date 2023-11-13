
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {

  sentry: {
    tunnelRoute: "/monitoring",
    // disableClientWebpackPlugin: true,
    // disableServerWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps:true,
  },
  // distDir: 'build',
  // assetPrefix: "/testing"
  // productionBrowserSourceMaps: true,

}
const sentryWebpackPluginOptions = {

  // release: "hello12345677",
  // dist: "5",
  silent: false,
  ignore: [],
  configFile: "sentry.properties"

};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);


// module.exports = (moduleExports)