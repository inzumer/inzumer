/** Resources */
import { Contact, Navigate, RichText } from '@components';
import { useTranslation } from 'react-i18next';
import { SOCIAL } from '@constants';

/** Styles */
import styles from '../styles.module.css';

const SectionSix: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='contact' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='footer-social-title' variant='p1' text={t('footer.social')} className={styles.section__title} bold />
        <div className={styles.section__links}>
          {SOCIAL.map((item, index) => (
            <Navigate id={`footer-social-link-${index}`} href={item.url} key={index} className={styles.section__links} external>
              <RichText id='footer-social-title' variant='s3' text={item.name} className={styles.section__text} />
            </Navigate>
          ))}
        </div>
      </div>
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

SectionSix.displayName = 'SectionSix';

export default SectionSix;
