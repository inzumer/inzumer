/** Resources */
import { useTranslation } from 'react-i18next';
import { RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

const Presentation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='presentation' className={styles.presentation}>
      <div className={styles.presentation__container}>
        <RichText id='presentation-title' className={styles.presentation__title} variant='h1' text={t('presentation.title-one')} />
        <RichText id='presentation-subtitle' className={styles.presentation__subtitle} variant='s4' text={t('presentation.title-two')} />
      </div>
    </section>
  );
};

Presentation.displayName = 'Presentation';

export default Presentation;
