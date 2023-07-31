// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',
  // debug:true,
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  // release: process.env.VERCEL_GIT_COMMIT_SHA || "81"
  // release: 'aldenRelease',
  // integrations: function (integrations) {
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "noEnv",

  //   return integrations.filter((integration) => integration.name !== "RequestData");
  // },
  // defaultIntegrations: false,

  // dist: "1",
  beforeSend(event, hint) {

    return event
  }
});

console.log(process.env.SENTRY_ENVIRONMENT)
// console.log(process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT)
