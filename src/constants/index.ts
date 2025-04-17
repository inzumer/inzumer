/** Hooks */
export const MEDIA_QUERY = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  largeDesktop: '(min-width: 1440px)',
};

/** Redirection */
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/inzumer",
  LINKEDIN: "https://www.linkedin.com/in/inzumer",
};

/** Resources */
export const SOCIAL = [
  { url: SOCIAL_LINKS.GITHUB, name: 'Github' },
  { url: SOCIAL_LINKS.LINKEDIN, name: 'LinkedIn' },
];

export const LANGUAGES = ['en', 'es', 'it'];

/** API */
const API = '/api';

export const API_PATH = {
  EMAIL: `${API}/send-email`,
};

/** METADATA */
export const NAME = 'Inzumer';

export const TWITTER = '@inzumer';

export const DESCRIPTION = "Development and optimization of fast, accessible, and reliable interfaces. I'm fluent in React.js, Next.js, TypeScript, Tailwind CSS, Jest, and Playwright. I guarantee performance, stability, and quality. I have over 3 years of experience in front-end development.";