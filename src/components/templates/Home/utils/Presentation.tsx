/** Resources */
import { Navigate, Icon } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const Presentation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='presentation' className={styles.presentation}>
      <div className={styles.presentation__container}>
        <p id='presentataion-title' className={styles.presentation__title}>{t('presentation.title-one')}
          <span id='presentataion-emoji' className={styles.presentation__emoji}> 👋 </span>
          {t('presentation.title-two')}
        </p>
      </div>
      <Navigate id='presentation-link' href='/#about' className={styles.presentation__button}>
        <Icon name='Chevron' width={32} height={32} />
      </Navigate>
    </section>
  );
};

Presentation.displayName = 'Presentation';

export default Presentation;
