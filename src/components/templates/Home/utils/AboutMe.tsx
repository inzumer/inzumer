/** Resources */
import { RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='about-title' variant='p1' text={t('about.title')} className={styles.section__title} bold />
        <div className={styles.section__card}>
          <RichText id='about-text-1' variant='s3' text={t('about.text-one')} />
          <RichText id='about-text-2' variant='s3' text={'Full Stack Developer'} bold />
          <RichText id='about-text-3' variant='s3' text={t('about.text-two')} />
          <RichText id='about-text-3' variant='s3' text={t('about.text-three')} />
        </div>
      </div>
    </section>
  );
};

AboutMe.displayName = 'AboutMe';

export default AboutMe;
