
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {

//framework-2c79e2a64abdb08b
  sentry: {
    // tunnelRoute: "/monitoring",
    // disableClientWebpackPlugin: true,
    // disableServerWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps:true,
  },
  
  // productionBrowserSourceMaps: true,

};
const sentryWebpackPluginOptions = {

  // release: "aldenRelease",
  // dist: "1",
  silent: false,
  ignore: [],
  configFile: "sentry.properties"

};



module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions );

// module.exports = (moduleExports)