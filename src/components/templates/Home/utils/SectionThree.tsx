/** Resources */
import { Card, RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const SectionThree: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='work' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='work-title' variant='p1' text={t('work.title')} className={styles.section__title} bold />
        <RichText id='work-description' variant='s3' text={t('work.text')} />
        <div className={styles.section__card_container}>
          <Card id='mercado-libre' title='Mercado Libre' url='https://www.mercadolibre.com' src='Meli' />
          <Card id='belo' title='Belo' url='https://www.belo.app/' src='Belo' />
        </div>
      </div>
    </section>
  );
};

SectionThree.displayName = 'SectionThree';

export default SectionThree;
