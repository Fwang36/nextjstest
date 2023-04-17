// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { RewriteFrames } from '@sentry/integrations';
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const init2 = "yes";
  

// const key = "1234"
  Sentry.init({
    dsn: SENTRY_DSN || 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    release: "2.1",
    initialScope: {
      tags: {"OLD HUB": "YES"}
    },
    debug: true,
    beforeSend(event) {
      console.log(event.event_id)

      return event
    },
    traceOptionsRequest: true,
    integrations: [
      // new RewriteFrames({
      //   iteratee: (frame) => {
      //     const absPathArr = frame.abs_path.split('/')
          
      //     frame.abs_path = "app:///" + absPathArr[absPathArr.length -1]
      //     frame.filename = frame.abs_path
      //     console.log(frame)
      //     return frame
      //   }
      // }),
      new Sentry.BrowserTracing({
        markBackgroundTransactions: false,
        // beforeNavigate: context => {
        //   console.log("TRANS CONTEXT", context)
        //   // if (context.name.includes("/posts")) {
        //   //   return undefined
        //   // }
        //   return {
        //     context
        //   }
        // }
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


