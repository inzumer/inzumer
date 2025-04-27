'use client';

/** Resources */
import { Icon, Image, Navigate, RichText, PagePosition } from '@components';
import { useTranslation } from 'react-i18next';
import { Images } from '@assets';

/** Styles */
import styles from './styles.module.css';

/** Belo Page */
const Page: React.FC = () => {
  const { t } = useTranslation();

  const LIST = [
    { id: 'home', url: '/', text: t('header.home') },
    { id: 'projects', url: '/#projects', text: t('header.projects') },
  ];

  const SKILLS = ['Tailwind CSS', 'Wouter', 'i18n', 'TypeScript', 'Next.js', 'React.js'];

  const IMAGES = ['Belo1', 'Belo2', 'Belo3', 'Belo4', 'Belo5', 'Belo6', 'Belo7', 'Belo8', 'Belo9'];

  return (
    <section className={styles.belo}>
      <div className={styles.belo__container}>
        <PagePosition id='belo' actual='Belo' list={LIST} />

        <div className={styles.belo__content}>
          <RichText id='belo-page-title' text={'Belo'} variant='h1' className={styles.belo__title} bold />

          <Navigate id='belo-disclaimer-link' external href='https://www.belo.app/' className={styles.belo__disclaimer}>
            <Icon name='Link' height={16} width={16} />
            <RichText id='belo-disclaimer-text' text={'belo.app'} variant='p4' className={styles.belo__disclaimer_link} />
          </Navigate>
        </div>

        <div className={styles.belo__description} >
          <RichText id='belo-disclaimer-description' text={t('belo.description')} variant='p3' />
        </div>

        <div className={styles.belo__skills_container}>
          {
            SKILLS.map((skill, index) => (
              <RichText key={index} id={`belo-skill-${index}`} text={skill} variant='s4' className={styles.belo__skill} />
            ))
          }
        </div>

        <div className={styles.belo__img_container}>
          {
            IMAGES.map((image, index) => (
              <Image key={index} src={image as keyof typeof Images} alt='Belo' styles={{ gridArea: image }} className={styles.belo__img} />
            ))
          }
        </div>

        <Navigate id='belo-button' href='/' className={styles.belo__button} external>
          <RichText id='belo-button-text' text={t('error.button')} variant='p2' bold className={styles.belo__button_text} />
        </Navigate>
      </div>
    </section>
  );
}

export default Page;
