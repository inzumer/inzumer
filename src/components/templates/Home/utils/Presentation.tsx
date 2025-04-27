/** Resources */
import { Image } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const Presentation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='presentation' className={styles.presentation}>
      <div className={styles.presentation__container}>
        <Image src='GamoraPresentation' alt='Gamora' className={styles.presentation__image} />
        <h1 id='presentation-title' className={styles.presentation__title}>{t('presentation.title-one')}
          <span id='presentation-emoji' className={styles.presentation__emoji}> 👋 </span>
          {t('presentation.title-two')}
        </h1>
      </div>
    </section>
  );
};

Presentation.displayName = 'Presentation';

export default Presentation;
