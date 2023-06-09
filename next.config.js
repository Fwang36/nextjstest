
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {

  sentry: {
    // disableClientWebpackPlugin: true,
    // disableServerWebpackPlugin: true,
    widenClientFileUpload: true,
    hideSourceMaps:true,
  },


};
const sentryWebpackPluginOptions = {

  release: "aldenRelease",
  silent: false,
  ignore: [],
  configFile: "sentry.properties"

};



module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions );

// module.exports = (moduleExports)