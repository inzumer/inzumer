/** Resources */
import { Question, RichText } from '@components';
import { useTranslation } from 'react-i18next';
import { Icons } from '@assets';

/** Styles */
import styles from '../styles.module.css';

const SectionThree: React.FC = () => {
  const { t } = useTranslation();

  const EXPERIENCE_JOBS = [
    {
      id: 'freelancer-fe-dev',
      title: 'Frontend Developer @ Freelancer',
      date: '2025',
      location: 'Amantea, Italia',
      link: 'inzumer.com',
      url: 'www.inzumer.com',
      icon: 'Free',
      description: t('experience.freelancer'),
      list: ['Next.js', 'React', 'Tailwind', 'CSS Modules', 'React Testing Library', 'Figma']
    },
    {
      id: 'mercado-libre-ssr',
      title: 'Software Engineer @ Mercado Libre',
      date: '2024 - 2025',
      location: 'Buenos Aires, Argentina',
      link: 'mercadolibre.com',
      url: 'https://www.mercadolibre.com',
      icon: 'Meli',
      description: t('experience.meli-ssr'),
      list: ['Express.js', 'React', 'Playwright', 'TypeScript', 'Cucumber', 'React Testing Library']
    },
    {
      id: 'mercado-libre-ssr',
      title: 'Analist Software @ Mercado Libre',
      date: '2021 - 2024',
      location: 'Buenos Aires, Argentina',
      link: 'mercadolibre.com',
      url: 'https://www.mercadolibre.com',
      icon: 'Meli',
      description: t('experience.meli-jr'),
      list: ['Backbone.js', 'JavaScript', 'Handlebars', 'Marionette.js', 'Jest', 'Sass', 'React']
    }
  ];

  return (
    <section id='experience' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='experience-title' variant='p1' text={t('experience.title')} className={styles.section__title} bold />
        {EXPERIENCE_JOBS.map(({ id, title, date, location, link, url, icon, description, list }, index) => (
          <Question key={index} id={id} title={title} date={date} location={location} link={link} url={url} icon={icon as keyof typeof Icons} description={description} list={list} />
        ))}
      </div>
    </section>
  );
};

SectionThree.displayName = 'SectionThree';

export default SectionThree;
