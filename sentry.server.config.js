// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',
  // Adjust this value in production, or use tracesSampler for greater control
  // tracesSampleRate: 1.0,
  // beforeSendTransaction(event) {
  //   console.log("TEST SERVER", event)
  //   if (event.contexts.trace.status = "not_found") {
  //     console.log("yes")
  //   }
  // },
  release: "1232323223",

  debug:true,
  // release: "22"
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
