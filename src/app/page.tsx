'use client';

/** Resources */
import Script from 'next/script';
import { Home } from '@components';

/** Home Page */
const Page = () => (
  <>
    <Home />
    <Script
      id='schema-breadcrumb'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.inzumer.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'About Me',
              'item': 'https://www.inzumer.com/#about'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'How I can help you',
              'item': 'https://www.inzumer.com/#skills'
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'My Projects',
              'item': 'https://www.inzumer.com/#projects'
            },
            {
              '@type': 'ListItem',
              'position': 5,
              'name': 'Say Hi',
              'item': 'https://www.inzumer.com/#contact'
            }
          ]
        }),
      }} />
  </>
);

export default Page;
