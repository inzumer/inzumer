'use client';

/** Resources */
import { Button, Icon, Navigate, RichText } from '@components';
import { FOOTER, LANGUAGES } from '@constants';
import { Icons } from '@assets';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';

const Footer: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <footer id='footer' data-testid='footer' className={styles.footer}>
      <div className={styles.footer__main}>
        <Navigate id='icon-footer' href='/' className={styles.footer__logo}>
          <RichText id='menu-item-icon' variant='p1' text={'inz'} className={styles.footer__text} />
        </Navigate>

        <div className={styles.footer__container}>
          <div className={styles.footer__container_box}>
            <RichText id='footer-about-title' variant='p1' text={t('footer.about')} className={styles.footer__text} />
            <RichText id='footer-about-description' variant='s4' text={t('about.text-one')} className={styles.footer__text} />
            <RichText id='footer-about-description' variant='s4' text={'Frontend Developer'} className={styles.footer__text} bold />
            <RichText id='footer-about-description' variant='s4' text={t('about.text-two')} className={styles.footer__text} />
          </div>

          <div className={styles.footer__container_box}>
            <RichText id='footer-language-title' variant='p1' text={t('footer.language')} className={styles.footer__text} />
            <div className={styles.footer__container_box_items}> 
              {LANGUAGES.map((lng) => (
                <Button
                  key={lng}
                  id={lng}
                  event={() => changeLanguage(lng)}
                  className={`${styles.footer__button} ${i18n.language === lng && styles.footer__button_active}`}
                >
                  <RichText id='footer-about-title' variant='s4' text={lng.toUpperCase()} className={`${styles.footer__text} ${i18n.language === lng && styles.footer__button_active}`} />
                </Button>
              ))}
            </div>
          </div>

          <div className={styles.footer__container_box}>
            <RichText id='footer-social-title' variant='p1' text={t('footer.social')} className={styles.footer__text} />
            <div className={styles.footer__container_box_items}>
              {FOOTER.map((item, index) => (
                <Navigate id={`footer-social-link-${index}`} href={item.url} key={index} external>
                  <Icon name={item.name as keyof typeof Icons} height={30} width={30} />
                </Navigate>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer__copyright}>
          <RichText id='footer-disclaimer' variant='s4' text={`© ${new Date().getFullYear()} ${t('footer.disclaimer')}`} className={styles.footer__text} />
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
