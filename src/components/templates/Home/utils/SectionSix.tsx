/** Resources */
import { Icon, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const SectionSix: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='recommendations' >
      <div className={styles.section__container_recommendations}>
        <div className={styles.section__text_container}>
          <RichText id='recommendations-title' variant='p1' text={t('recommendations.title')} className={styles.section__title} bold />
          <RichText id='recommendations-description' variant='p3' text={t('recommendations.description')} className={styles.section__description} />
        </div>

        <div className={styles.section__recommendation}>
          <div className={`${styles.section__recommendation_container} ${styles.section__recommendation_container_one}`}>
            <Icon name='Quotes' width={56} height={56} />
            <RichText id='carlos-vizcaya-description' variant='s4' text={t('recommendations.carlos-vizcaya')} className={styles.section__description} />
            <RichText id='carlos-vizcaya-author' variant='s4' text='- Carlos Vizcaya' bold />
            <RichText id='carlos-vizcaya-position' variant='s4' text='Project Leader' />
          </div>

          <div className={`${styles.section__recommendation_container} ${styles.section__recommendation_container_two}`}>
            <Icon name='Quotes' width={56} height={56} />
            <RichText id='estefany-campos-description' variant='s4' text={t('recommendations.estefany-campos')} className={styles.section__description} />
            <RichText id='estefany-campos-author' variant='s4' text='- Estefany Campos' bold />
            <RichText id='estefany-campos-position' variant='s4' text='Software Engineer' />
          </div>

          <div className={`${styles.section__recommendation_container} ${styles.section__recommendation_container_three}`}>
            <Icon name='Quotes' width={56} height={56} />
            <RichText id='juliana-gonzalez-description' variant='s4' text={t('recommendations.juliana-gonzalez')} className={styles.section__description} />
            <RichText id='juliana-gonzalez-author' variant='s4' text='- Juliana Gonzalez' bold />
            <RichText id='juliana-gonzalez-position' variant='s4' text='Software Engineer' />
          </div>
        </div>
      </div>
    </section>
  );
};

SectionSix.displayName = 'SectionSix';

export default SectionSix;
