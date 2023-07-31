import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  debug: true,  
  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});