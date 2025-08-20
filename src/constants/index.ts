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

export const LANGUAGES = ['en', 'es'];

/** API */
const API = '/api';

export const API_PATH = {
  EMAIL: `${API}/send-email`,
};

/** METADATA */
export const NAME = 'Inzumer';

export const TWITTER = '@inzumer';

export const DESCRIPTION = "Hi 👋 I’m a Software Engineer • Fullstack Developer, whichever you prefer. I have 4 years of experience in high-traffic environments, specializing in creating and optimizing scalable and reliable interfaces. I’ve played a key role in high-impact projects, including the checkout of Mercado Libre, focusing on delivering fast, accessible, and stable user experiences. My background combines complex application development, collaboration with multidisciplinary teams, and continuous improvement of product performance and stability.";