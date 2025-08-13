/** Resources */
import { Card, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='projects' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='projects-title' variant='p1' text={t('projects.title')} className={styles.section__title} bold />
        <RichText id='projects-description' variant='s3' text={t('projects.text')} className={styles.section__description}/>
        <div className={`${styles.section__card_container} ${styles.section__card_container__projects}`}>
          <Card id='api-store' title='Api Store' description={t('store.description-one')} disclaimer='Backend API & Database' url='/projects/api-store' />
          <Card id='belo-app' title='Belo' description={t('belo.description')} disclaimer='Frontend Web' url='/projects/belo' />
          <Card id='payments-v2' title='Payments V2.1' description={t('payments.description-one')} disclaimer='Frontend Web' url='/projects/payments-v2' />
          <Card id='regression' title='Regression' description={t('regression.description-one')} disclaimer='Frontend Web' url='/projects/regression' />
          <Card id='smart-coupons' title='Smart Coupons' description={t('smartcoupons.description')} disclaimer='Frontend Web' url='/projects/smart-coupon' />
        </div>
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';

export default Projects;
