import nodemailer from 'nodemailer';
import type { ContactInput } from '@utils';
import { NOTIFICATION_ADDRESS, renderAutoReply, renderNotification } from './contact-email';

export interface MailMessage {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

export interface MailTransport {
  sendMail: (message: MailMessage) => Promise<unknown>;
}

/** Gmail SMTP with an app password (`GMAIL_APP_PASSWORD`, set in Vercel; never in the repo). */
export const createGmailTransport = (user: string, appPassword: string): MailTransport =>
  nodemailer.createTransport({ service: 'gmail', auth: { user, pass: appPassword } });

/** Sends the notice to Nahuel and the confirmation to the sender, both from the Gmail account. */
export const sendContactEmails = async (
  input: ContactInput,
  transport: MailTransport,
  sender: string = NOTIFICATION_ADDRESS,
): Promise<void> => {
  const from = `Nahuel Zamuner <${sender}>`;
  const [notification, autoReply] = await Promise.all([
    renderNotification(input),
    renderAutoReply(input),
  ]);

  await transport.sendMail({
    from,
    to: NOTIFICATION_ADDRESS,
    replyTo: input.email,
    ...notification,
  });
  await transport.sendMail({ from, to: input.email, ...autoReply });
};
