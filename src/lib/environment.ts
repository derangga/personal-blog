import { z } from "zod";

const Environment = z.object({
  MAILGUN_API_KEY: z.string().min(1),
  MAILGUN_DOMAIN: z.string().min(1),
  MAILGUN_FORWARDER_EMAIL: z.string().email(),
  MY_EMAIL: z.string().email(),
});

const getEnvironment = (() => {
  let instance: z.infer<typeof Environment> | null = null;

  return () => {
    if (!instance) {
      instance = Environment.parse(process.env);
    }
    return instance;
  };
})();

export const env = getEnvironment();
