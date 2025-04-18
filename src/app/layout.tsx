/** Resources */
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';
import { Roboto_Mono } from 'next/font/google';
import { Footer, Menu, I18nLayout } from '@components';
import { DESCRIPTION, NAME, TWITTER } from '@constants';

/** Styles */
import './styles.css';

/** Font configuration */
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-mono',
});

/** Metadata */
export const metadata: Metadata = {
  title: `${NAME}`,
  description: `${DESCRIPTION}`,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    title: `${NAME}`,
    description: `${DESCRIPTION}`,
    url: 'https://www.inzumer.com/',
    siteName: `${NAME}`,
    locale: 'en_US',
    images: [
      {
        url: './oph.png',
        width: 1200,
        height: 630,
        alt: 'Inzumer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME}`,
    description: `${DESCRIPTION}`,
    site: `${TWITTER}`,
    creator: `${TWITTER}`,
    images: [
      {
        url: './oph.png',
        width: 1200,
        height: 630,
        alt: 'Inzumer Logo',
      },
    ],
  },
}

/** RootLayout */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body id='root' className={robotoMono.className}>
        <I18nLayout>
          <Menu />
          <main id='main' data-testid='main'>
            {children}
            <Analytics />
          </main>
          <Footer />
        </I18nLayout>
      </body>
    </html>
  )
}
