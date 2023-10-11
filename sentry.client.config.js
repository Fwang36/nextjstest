// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/nextjs';

// const dsn = { dsn: "https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976" };
// const defaultConfig = {
//   release: 'testing',  
//   integrations: [
//   new Sentry.BrowserTracing(),
//   new Sentry.Replay()
//   ],
//   tracesSampleRate: 0.5,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0
//   };

//   const sentryConfig = {
//     // debug: true,
//     replaysSessionSampleRate: 0,
//     replaysOnErrorSampleRate: 0,
//     environment: "testing",
//     release: "22345432",
//     autoBreadcrumbs: {
//     console: false,
//     dom: true,
//     location: true,
//     xhr: false,
//     sentry: true
//     }
//   }

//   Sentry.init({
//     ...dsn,
//     ...defaultConfig,
//     ...sentryConfig,
//   })
  Sentry.init({
    defaultIntegrations: false,
    // dsn: "http://fd28336e6c92410386c2ffffe4d3b7c2@sentry.io/4504089864830976",
    dsn: 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',
    // debug: true,
    // dist: "5",
    environment: "testing",
    release:"testMultiProjectResolve",
    // defaultIntegrations: false,
    // initialScope: {
    //   user: {
    //     ip_address: 1.1
    //   }
    // },
    beforeSend(event) {
      console.log(event)
      // console.log(event.request.headers)
      // event.request.headers['X-Forwarded-For'] = "123.523.1.4"
      // event.request.env = {REMOTE_ADDR: "123.523.1.4"}      
      // console.log(event.request)
      
      return event
    },
    tracesSampler: (event) => {
      console.log(event.transactionContext)
      return 1
    },
    // beforeSendTransaction: (event) => {
    //   console.log("transaction",event)
    //   // console.log("event", event)
    //   // console.log(event.sdkProcessingMetadata)
    //   // console.log(event.t)
    //   return event
    // },
    integrations: [
      new Sentry.BrowserTracing({
        markBackgroundTransactions: false,
      }),

      new Sentry.Replay({
        networkDetailAllowUrls: ["3000"],
        networkCaptureBodies: true,
        
      }),  
      
      new Sentry.Integrations.HttpContext()
    ],
    // debug:true,
    tracesSampleRate: 1,
    replaysSessionSampleRate: 1, 
    replaysOnErrorSampleRate: 1,
  
  });

  