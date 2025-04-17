'use client';

/** Resources */
import { Presentation, SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from './utils';

const Home: React.FC = () => (
  <>
    <Presentation />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
  </>
);

Home.displayName = 'Home';

export default Home;
