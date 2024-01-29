// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/nextjs';
import { Feedback } from '@sentry-internal/feedback';


  Sentry.init({
    // dsn: "http://fd28336e6c92410386c2ffffe4d3b7c2@sentry.io/4504089864830976",
    dsn: 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',
    // debug: true,
    // dist: "5",
    environment: "testing",
    // defaultIntegrations: false,
    initialScope: {
      user: {
        ip_address: 1.1
      }
    },
    // sampleRate: 1,
    
    beforeSend(event) {

      
      return event
    },


    // autoSessionTracking: false,
    // tracesSampler: (event) => {
    //   console.log(location.hash)
    //   if(location.hash) {
    //     console.log("location detected")
    //     return 0
    //   }
    //   // console.log(event.transactionContext)
    //   return 0
    // },

    
    // beforeSendTransaction: (event) => {
    //   console.log("transaction",event)
    //   // console.log("event", event)
    //   // console.log(event.sdkProcessingMetadata)
    //   // console.log(event.t)
    //   return event
    // },
    // initialScope: {
    //   user: {
    //     email: "test@1235.com"
    //   }
    // },
    integrations: [
      new Sentry.BrowserTracing({
        markBackgroundTransactions: false,
      }),

      new Sentry.Replay({

        networkDetailAllowUrls: ["3000"],
        networkCaptureBodies: true,
        
      }),  
    
    ],
    debug:true,
    tracesSampleRate: 1,
    // replaysSessionSampleRate: 1, 
    replaysOnErrorSampleRate: 1,

  });

  