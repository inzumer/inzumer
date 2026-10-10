import type { APIRoute } from 'astro';
import { SITE_AUTHOR } from '@constants';
import { createGmailTransport, handleContact } from '@services/contact-email';
import { createRateLimiter } from '@utils';

/** Runs on demand (Vercel function); the rest of the site is static. */
export const prerender = false;

/** Five messages per address every ten minutes. */
const allow = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

export const POST: APIRoute = ({ request, clientAddress }) => {
  const password = import.meta.env.GMAIL_APP_PASSWORD ?? process.env['GMAIL_APP_PASSWORD'];
  const transport = password ? createGmailTransport(SITE_AUTHOR.email, password) : null;

  return handleContact(request, { transport, allow, clientAddress });
};
