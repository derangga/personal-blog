import Mailgun from "mailgun.js";
import FormData from "form-data";
import { env } from "./environment";

const mailgun = new Mailgun(FormData);
export const mgClient = mailgun.client({
  username: "api",
  key: env.MAILGUN_API_KEY,
});
