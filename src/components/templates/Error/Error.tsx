'use client';

/** Resources */
import { useTranslation } from 'react-i18next';
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from './styles.module.css'

const Error: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id='error' className={styles.error}>
      <div className={styles.error__container}>
        <Icon name={'Error'} className={styles.error_img} />
        <RichText id='error-title' text={t('error.message')} variant='h1' className={styles.error__title} bold />
        <Navigate id='error-button' href='/' className={styles.error__button}>
          <RichText id='error-button-text' text={t('error.button')} variant='p2' className={styles.error__button_text} bold />
        </Navigate>
      </div>
    </section>
  );
};

Error.displayName = 'Error';

export default Error;
