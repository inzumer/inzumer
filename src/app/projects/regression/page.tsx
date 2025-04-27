'use client';

/** Resources */
import { Icon, Navigate, RichText, PagePosition } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from './styles.module.css';

/** Regression Page */
const Page: React.FC = () => {
  const { t } = useTranslation();

  const LIST = [
    { id: 'home', url: '/', text: t('header.home') },
    { id: 'projects', url: '/#projects', text: t('header.projects') },
  ];

  const SKILLS = ['Playwright', 'TypeScript', 'Cucumber'];

  return (
    <section className={styles.regression}>
      <div className={styles.regression__container}>
        <PagePosition id='regression' actual='Regression' list={LIST} />

        <div className={styles.regression__content}>
          <RichText id='regression-page-title' text={'Regre'} variant='h1' className={styles.regression__title} bold />

          <Navigate id='regression-disclaimer-link' external href='https://www.mercadolibre.com' className={styles.regression__disclaimer}>
            <Icon name='Link' height={16} width={16} />
            <RichText id='regression-disclaimer-text' text={'mercadolibre.com'} variant='p4' className={styles.regression__disclaimer_link} />
          </Navigate>
        </div>

        <div className={styles.regression__description} >
          <RichText id='regression-disclaimer-description' text={t('regression.description-one')} variant='p3' />
          <RichText id='regression-disclaimer-description' text={t('regression.description-two')} variant='p3' />
          <RichText id='regression-disclaimer-description' text={t('regression.description-three')} variant='p3' />
        </div>

        <div className={styles.regression__skills_container}>
          {
            SKILLS.map((skill, index) => (
              <RichText key={index} id={`regression-skill-${index}`} text={skill} variant='s4' className={styles.regression__skill} />
            ))
          }
        </div>

        <Navigate id='regression-button' href='/' className={styles.regression__button} external>
          <RichText id='regression-button-text' text={t('error.button')} variant='p2' bold className={styles.regression__button_text} />
        </Navigate>
      </div>
    </section>
  );
}

export default Page;
