"use server";

import { env } from "@/lib/environment";
import { mgClient } from "@/lib/mailgun";
import { MailFormValues } from "@/models/mail-form";

async function sendMail(form: MailFormValues) {
  try {
    await mgClient.messages.create(env.MAILGUN_DOMAIN, {
      from: `Mailgun Sandbox <${env.MAILGUN_FORWARDER_EMAIL}>`,
      to: [`Dimas Rangga ${env.MY_EMAIL}`],
      subject: `Personal Web | ${form.name}`,
      text: `
      From: ${form.email}

      ${form.message}
      `,
    });
    return true;
  } catch (error) {
    console.error(`failed send email: ${error}`);
    return false;
  }
}

export default sendMail;
