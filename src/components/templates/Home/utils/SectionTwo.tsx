/** Resources */
import { Icon, RichText } from '@components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@hooks';
import { Icons } from '@assets';

/** Styles */
import styles from '../styles.module.css';

const SectionTwo: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');
  const { t } = useTranslation();

  const ICONS = [
    { name: 'Github', area: 'github' },
    { name: 'Sass', area: 'sass' },
    { name: 'Jest', area: 'jest' },
    { name: 'Next', area: 'next' },
    { name: 'React', area: 'react' },
    { name: 'Tailwind', area: 'tailwind' },
    { name: 'TS', area: 'ts' },
    { name: 'JS', area: 'js' },
    { name: 'HTML', area: 'html' },
    { name: 'CSS', area: 'css' },
  ];

  return (
    <section id='skills' className={styles.section} >
      <div className={styles.section__container}>
        <RichText id='skills-title' variant='p1' text={t('skills.title')} className={styles.section__title} bold />
        <div className={styles.section__container_icons}>
          {ICONS.map((item, index) => (
            <div
              key={index}
              className={styles.section__icons}
              style={{ gridArea: item.area }}
            >
              <Icon name={item.name as keyof typeof Icons} height={isDesktop ? 64 : 40} width={isDesktop ? 64 : 40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

SectionTwo.displayName = 'SectionTwo';

export default SectionTwo;
