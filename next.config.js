// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const sentryWebpackPluginOptions = {
  silent: false
}

module.exports = withSentryConfig(
  withBundleAnalyzer({
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: false,
        },
      ]
    },
    sentry: {
      hideSourceMaps: true,
    },
    publicRuntimeConfig: {
      modifiedDate: new Date().toISOString(),
    },
  }),
  sentryWebpackPluginOptions
)
