// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
// import { ProfilingIntegration } from '@sentry/profiling-node';
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
  // integrations: [    new ProfilingIntegration()],
  //   return integrations.filter((integration) => integration.name !== "RequestData");
  // },
  // defaultIntegrations: false,
  tracesSampleRate: 1,
  // profilesSampleRate: 1,
  // profilesSampler(samplingContext) {
  //   console.log(samplingContext)
  //   return 1
  // },
  // dist: "1",
  beforeSendTransaction(event){
    // console.log(event)
    return event
  },
  debug: true,
  beforeSend(event) {
    // console.log(event.request.headers)
    // event.request.headers['X-Forwarded-For'] = "123.523.1.4"
    // event.request.env = {REMOTE_ADDR: "123.523.1.4"}      
    // console.log(event.request.headers)
    return event
  },
});

