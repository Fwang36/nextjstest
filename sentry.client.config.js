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
    // tracesSampleRate: 1,
    dist: "1",
    release: "aldenRelease",
    initialScope: {
      tags: {"OLD HUB": "YES"},
      // user: {id: "1231rrrr23"}
    },
    initialScope:{
      tags: {
        hello: "testTag"
      } ,
      user: {
        email: "test@123.com",
      }
    },
    debug: true,
    beforeSend(event) {

      console.log(event)

      return event
    },
    // ignoreTransactions: [/posts/],
    beforeSendTransaction: (event) => {
      
      console.log("event", event)

      console.log("message", event.message)
      // for (let span of event.spans) {
      //   if (span.description.includes("static")){

      //     const index = event.spans.indexOf(span)
      //     console.log(index)
      //     console.log(event.spans[index])
      //     delete event.spans[index]
      //     console.log(event.spans)

      //   }
      // }

      return event
    },
    // integrations: function (integrations) {
    //   // integrations will be all default integrations
    //   return integrations.filter(function (integration) {
    //     return integration.name !== "Dedupe";
    //   });
    // },
    integrations: [
      new Sentry.BrowserTracing({
        // shouldCreateSpanForRequest: span => {
        //   if (span.includes("development")) {
        //     console.log("span", span)
        //     return span
        //   }
        //   return null
        // },
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
      new Sentry.Replay({
        networkDetailAllowUrls: ["3000"],
        networkCaptureBodies: true
      }),      
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

Sentry.setTags({
  hell2: "test",
  dwdwd: "test2",
})
