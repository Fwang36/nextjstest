import * as Sentry from "@sentry/nextjs"

export default (req, res) => {
    // console.log(Sentry.getCurrentHub().getScope()._sdkProcessingMetadata)

    res.status(200).json({ name: "John Doe" });
  };