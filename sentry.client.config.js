// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { RewriteFrames } from '@sentry/integrations';
// const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;


  Sentry.init({
    dsn: 'https://fd28336e6c92410386c2ffffe4d3b7c2@o1407376.ingest.sentry.io/4504089864830976',

    // release: "aldenRelease",

    // environment: "testing",

    debug: true,
    beforeSend(event) {

      console.log(event)

      return event
    },
    // defaultIntegrations: false,
    beforeSendTransaction: (event) => {
      
      console.log("event", event)


      return event
    },
    integrations: function (integrations) {
      // integrations will be all default integrations
      return integrations.filter(function (integration) {
        return integration.name !== "Dedupe";
      });
    },
    // integrations: [
    //   new Sentry.BrowserTracing({

    //     markBackgroundTransactions: false,

    
    //   }),
    //   new Sentry.Replay({
    //     networkDetailAllowUrls: ["3000"],
    //     networkCaptureBodies: true
    //   }),      
    // ],
    
    // replaysSessionSampleRate: 1,
    // replaysOnErrorSampleRate: 1,
  

  
  });

