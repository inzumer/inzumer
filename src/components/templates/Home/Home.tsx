'use client';

/** Resources */
import { Presentation, AboutMe, Skills, Projects, ContactMe } from './utils';

const Home: React.FC = () => (
  <>
    <Presentation />
    <AboutMe />
    <Skills />
    <Projects />
    <ContactMe />
  </>
);

Home.displayName = 'Home';

export default Home;
