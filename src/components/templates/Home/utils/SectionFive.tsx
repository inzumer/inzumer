/** Resources */
import { Card, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const SectionFive: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='projects' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='projects-title' variant='p1' text={t('projects.title')} className={styles.section__title} bold />
        <RichText id='projects-description' variant='s3' text={t('projects.text')} />
        <div className={styles.section__card_container}>
          <Card id='marvel-comics-library' title='Marvel Library - Next.js' url='https://comics-library-marvel-app.vercel.app/' src='Marvel' />
        </div>
      </div>
    </section>
  );
};

SectionFive.displayName = 'SectionFive';

export default SectionFive;
