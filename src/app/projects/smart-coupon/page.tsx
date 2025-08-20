'use client';

/** Resources */
import Script from 'next/script';
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
    <>
      <section id='smart-coupons' className={styles.smart_coupons}>
        <div className={styles.smart_coupons__container}>
          <PagePosition id='smart-coupons-position' actual='Smart Coupons' list={LIST} />

          <div className={styles.smart_coupons__content}>
            <RichText id='smart-coupons-page-title' text={'Smart Coupons'} variant='h1' className={styles.smart_coupons__title} bold />

            <Navigate id='smart-coupons-disclaimer-link' external href='https://www.mercadolibre.com' className={styles.smart_coupons__disclaimer}>
              <Icon name='Link' height={16} width={16} />
              <RichText id='smart-coupons-disclaimer-text' text={'mercadolibre.com'} variant='p4' className={styles.smart_coupons__disclaimer_link} />
            </Navigate>
          </div>

          <div className={styles.smart_coupons__description} >
            <RichText id='smart-coupons-disclaimer-description' text={t('smartcoupons.description')} variant='p3' />
          </div>

          <div className={styles.smart_coupons__skills_container}>
            {
              SKILLS.map((skill, index) => (
                <RichText key={index} id={`smart-coupons-skill-${index}`} text={skill} variant='s4' className={styles.smart_coupons__skill} />
              ))
            }
          </div>

          <div className={styles.smart_coupons__img_container}>
            {
              IMAGES.map((image, index) => (
                <Image key={index} src={image as keyof typeof Images} alt='smart-coupons' styles={{ gridArea: image }} className={styles.smart_coupons__img} />
              ))
            }
          </div>

          <Navigate id='smart-coupons-button' href='/' className={styles.smart_coupons__button} external>
            <RichText id='smart-coupons-button-text' text={t('error.button')} variant='p2' bold className={styles.smart_coupons__button_text} />
          </Navigate>
        </div>
      </section>
      <Script
        id='schema-breadcrumb-api-store'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.inzumer.com/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Smart Coupons', 'item': 'https://www.inzumer.com/projects/smart-coupon' }
            ]
          })
        }}
      />
    </>
  );
}

export default Page;
