'use client';

/** Resources */
import { Icon, Image, Navigate, RichText, PagePosition } from '@components';
import { useTranslation } from 'react-i18next';
import { Images } from '@assets';

/** Styles */
import styles from './styles.module.css';

/** Smart Coupons Page */
const Page: React.FC = () => {
  const { t } = useTranslation();

  const LIST = [
    { id: 'home', url: '/', text: t('header.home') },
    { id: 'projects', url: '/#projects', text: t('header.projects') },
  ];

  const SKILLS = ['Backbone.js', 'Sass', 'Handlebars.js', 'JavaScript', 'Jest'];

  const IMAGES = ['SM1', 'SM2', 'SM3', 'SM4'];

  return (
    <section className={styles.smart_coupons}>
      <div className={styles.smart_coupons__container}>
        <PagePosition id='smartcoupons' actual='Smart Coupons' list={LIST} />

        <div className={styles.smart_coupons__content}>
          <RichText id='smartcoupons-page-title' text={'smart coupons'} variant='h1' className={styles.smart_coupons__title} bold />

          <Navigate id='smartcoupons-disclaimer-link' external href='https://www.mercadolibre.com' className={styles.smart_coupons__disclaimer}>
            <Icon name='Link' height={16} width={16} />
            <RichText id='smartcoupons-disclaimer-text' text={'mercadolibre.com'} variant='p4' className={styles.smart_coupons__disclaimer_link} />
          </Navigate>
        </div>

        <div className={styles.smart_coupons__description} >
          <RichText id='smartcoupons-disclaimer-description' text={t('smartcoupons.description')} variant='p3' />
        </div>

        <div className={styles.smart_coupons__skills_container}>
          {
            SKILLS.map((skill, index) => (
              <RichText key={index} id={`smartcoupons-skill-${index}`} text={skill} variant='s4' className={styles.smart_coupons__skill} />
            ))
          }
        </div>

        <div className={styles.smart_coupons__img_container}>
          {
            IMAGES.map((image, index) => (
              <Image key={index} src={image as keyof typeof Images} alt='smartcoupons' styles={{ gridArea: image }} className={styles.smart_coupons__img} />
            ))
          }
        </div>

        <Navigate id='smartcoupons-button' href='/' className={styles.smart_coupons__button} external>
          <RichText id='smartcoupons-button-text' text={t('error.button')} variant='p2' bold className={styles.smart_coupons__button_text} />
        </Navigate>
      </div>
    </section>
  );
}

export default Page;
