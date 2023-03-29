// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { RewriteFrames } from '@sentry/integrations';
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const init2 = "yes";
  
  Sentry.init({
    dsn: SENTRY_DSN || 'https://dd442274e9994d4b88aba7fdcfcaa288@o4504894194450432.ingest.sentry.io/4504919201808384',
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1.0,
    release: "1",
    debug: true,
    beforeSend(event) {
      console.log(event)
      return event
    },
    integrations: [
      new Sentry.BrowserTracing({
        // custom options
    
      }),
      new Sentry.Replay(),      
    ],
    replaysSessionSampleRate: 1,
    replaysOnErrorSampleRate: 1,
  
    // ...
    //test2222
    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
    // release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "81"
  
  });
