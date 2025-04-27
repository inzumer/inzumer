/** Resources */
import { Contact, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const SectionFive: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='contact-title' variant='p1' text={t('contact.title')} className={styles.section__title} bold />
        <RichText id='contact-description' variant='p3' text={t('contact.text')} className={styles.section__description} />
        <div className={styles.section__card_container}>
          <Contact />
        </div>
      </div>
    </section>
  );
};

SectionFive.displayName = 'SectionFive';

export default SectionFive;
