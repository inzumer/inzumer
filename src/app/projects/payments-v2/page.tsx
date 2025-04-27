'use client';

/** Resources */
import { Icon, Image, Navigate, RichText, PagePosition } from '@components';
import { useTranslation } from 'react-i18next';
import { Images } from '@assets';

/** Styles */
import styles from './styles.module.css';

/** Payments Page */
const Page: React.FC = () => {
  const { t } = useTranslation();

  const LIST = [
    { id: 'home', url: '/', text: t('header.home') },
    { id: 'projects', url: '/#projects', text: t('header.projects') },
  ];

  const SKILLS = ['Express.js', 'Sass', 'New Relic', 'Kibana', 'Datadog', 'React.js', 'React Testing Library'];

  const IMAGES = ['Payments1', 'Payments2', 'Payments3', 'Payments4', 'Payments5', 'Payments6'];

  return (
    <section className={styles.payments}>
      <div className={styles.payments__container}>
        <PagePosition id='payments' actual='Payments 2.1' list={LIST} />

        <div className={styles.payments__content}>
          <RichText id='payments-page-title' text={'payments 2.1'} variant='h1' className={styles.payments__title} bold />

          <Navigate id='payments-disclaimer-link' external href='https://www.mercadolibre.com' className={styles.payments__disclaimer}>
            <Icon name='Link' height={16} width={16} />
            <RichText id='payments-disclaimer-text' text={'mercadolibre.com'} variant='p4' className={styles.payments__disclaimer_link} />
          </Navigate>
        </div>

        <div className={styles.payments__description} >
          <RichText id='payments-disclaimer-description' text={t('payments.description-one')} variant='p3' />
          <RichText id='payments-disclaimer-description' text={t('payments.description-two')} variant='p1' bold />
          <RichText id='payments-disclaimer-description' text={t('payments.description-three')} variant='p3' />
          <RichText id='payments-disclaimer-description' text={t('payments.description-four')} variant='p1' bold />
          <RichText id='payments-disclaimer-description' text={t('payments.description-five')} variant='p3' />
          <RichText id='payments-disclaimer-description' text={t('payments.description-six')} variant='p1' bold />
          <RichText id='payments-disclaimer-description' text={t('payments.description-seven')} variant='p3' />
        </div>

        <div className={styles.payments__skills_container}>
          {
            SKILLS.map((skill, index) => (
              <RichText key={index} id={`payments-skill-${index}`} text={skill} variant='s4' className={styles.payments__skill} />
            ))
          }
        </div>

        <div className={styles.payments__img_container}>
          {
            IMAGES.map((image, index) => (
              <Image key={index} src={image as keyof typeof Images} alt='payments' styles={{ gridArea: image }} className={styles.payments__img} />
            ))
          }
        </div>

        <Navigate id='payments-button' href='/' className={styles.payments__button} external>
          <RichText id='payments-button-text' text={t('error.button')} variant='p2' bold className={styles.payments__button_text} />
        </Navigate>
      </div>
    </section>
  );
}

export default Page;
