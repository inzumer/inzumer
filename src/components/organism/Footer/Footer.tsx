'use client';

/** Resources */
import { RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id='footer' data-testid='footer' className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__copyright}>
          <RichText id='footer-disclaimer' variant='s4' text={`© ${new Date().getFullYear()} ${t('footer.disclaimer')}`} className={styles.footer__text} />
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
