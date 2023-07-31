import * as Sentry from "@sentry/nextjs"

export default (req, res) => {
    console.log(Sentry.getCurrentHub().getScope()._sdkProcessingMetadata)
    throw new Error("API throw error test");
    res.status(200).json({ name: "John Doe" });
  };