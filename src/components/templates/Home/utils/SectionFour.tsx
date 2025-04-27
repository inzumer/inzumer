/** Resources */
import { Card, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const SectionFour: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='projects' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='projects-title' variant='p1' text={t('projects.title')} className={styles.section__title} bold />
        <RichText id='projects-description' variant='s3' text={t('projects.text')} />
        <div className={styles.section__card_container}>
          <Card id='belo-app' title='Belo' description='Frontend Web' url='/projects/belo' src='Belo' />
          <Card id='payments-v2' title='Payments V2.1' description='Frontend Web' url='/projects/payments-v2' src='Payments' />
          <Card id='regression' title='Regression' description='Frontend Web' url='/projects/regression' src='Regression' />
          <Card id='smart-coupons' title='Smart Coupons' description='Frontend Web' url='/projects/smart-coupon' src='SmartCoupons' />
        </div>
      </div>
    </section>
  );
};

SectionFour.displayName = 'SectionFour';

export default SectionFour;
