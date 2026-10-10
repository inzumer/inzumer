import nodemailer from 'nodemailer';
import { createGmailTransport, sendContactEmails, type MailMessage } from '../mailer';

const input = {
  name: 'Ada',
  email: 'ada@example.com',
  message: 'Hola, quiero hablar de un proyecto.',
  lang: 'es',
} as const;

describe('mailer', () => {
  it('should send the notice to Nahuel first, then the confirmation to the sender', async () => {
    const sent: MailMessage[] = [];
    const transport = {
      sendMail: async (message: MailMessage) => {
        sent.push(message);
      },
    };

    await sendContactEmails(input, transport);

    expect(sent.map(({ to, replyTo, from }) => ({ to, replyTo, from }))).toStrictEqual([
      {
        to: 'inzumer@gmail.com',
        replyTo: 'ada@example.com',
        from: 'Nahuel Zamuner <inzumer@gmail.com>',
      },
      { to: 'ada@example.com', replyTo: undefined, from: 'Nahuel Zamuner <inzumer@gmail.com>' },
    ]);
    expect(sent[1]?.subject).toBe('Gracias por escribirme, Ada');
  });

  it('should not confirm when the notice fails', async () => {
    const sendMail = vi.fn().mockRejectedValueOnce(new Error('smtp'));

    await expect(sendContactEmails(input, { sendMail })).rejects.toThrow('smtp');
    expect(sendMail).toHaveBeenCalledOnce();
  });

  it('should build a Gmail transport with the app password', () => {
    const createTransport = vi.spyOn(nodemailer, 'createTransport');

    createGmailTransport('inzumer@gmail.com', 'app-password');

    expect(createTransport).toHaveBeenCalledWith({
      service: 'gmail',
      auth: { user: 'inzumer@gmail.com', pass: 'app-password' },
    });
    createTransport.mockRestore();
  });
});
