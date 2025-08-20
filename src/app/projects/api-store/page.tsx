'use client';

/** Resources */
import Script from 'next/script';
import { Icon, Navigate, RichText, PagePosition } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';

/** API Store Page */
const Page: React.FC = () => {
  const { t } = useTranslation();

  const LIST = [
    { id: 'home', url: '/', text: t('header.home') },
    { id: 'projects', url: '/#projects', text: t('header.projects') },
  ];

  const SKILLS = ['NestJs', 'TypeScript', 'Express', 'Swagger', 'MongoDB', 'Jest', 'CI/CD', 'GitHub Actions', 'Sentry'];

  return (
    <>
      <section id='api-store' className={styles.store}>
        <div className={styles.store__container}>
          <PagePosition id='store' actual='API Store' list={LIST} />

          <div className={styles.store__content}>
            <RichText id='store-page-title' text={'API Store'} variant='h1' className={styles.store__title} bold />

            <Navigate id='store-disclaimer-link' external href='https://api-store-eqff.onrender.com/docs#/' className={styles.store__disclaimer}>
              <Icon name='Link' height={16} width={16} />
              <RichText id='store-disclaimer-text' text={'api-store.com'} variant='p4' className={styles.store__disclaimer_link} />
            </Navigate>
          </div>

          <div className={styles.store__description} >
            <RichText id='store-disclaimer-description' text={t('store.description-one')} variant='p3' />
            <RichText id='store-disclaimer-description' text={t('store.description-two')} variant='p3' />
          </div>

          <div className={styles.store__skills_container}>
            {
              SKILLS.map((skill, index) => (
                <RichText key={index} id={`store-skill-${index}`} text={skill} variant='s4' className={styles.store__skill} />
              ))
            }
          </div>

          <Navigate id='store-button' href='/' className={styles.store__button} external>
            <RichText id='store-button-text' text={t('error.button')} variant='p2' bold className={styles.store__button_text} />
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
              { '@type': 'ListItem', 'position': 2, 'name': 'API Store', 'item': 'https://www.inzumer.com/projects/api-store' }
            ]
          })
        }}
      />
    </>
  );
}

export default Page;
