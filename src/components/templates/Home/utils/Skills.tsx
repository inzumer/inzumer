/** Resources */
import { RichText } from '@components';
import { useTranslation } from 'react-i18next';

/** Styles */
import styles from '../styles.module.css';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    {
      title: t('skills.title-one'),
      description: t('skills.description-one'),
    },
    {
      title: t('skills.title-two'),
      description: t('skills.description-two'),
    },
    {
      title: t('skills.title-three'),
      description: t('skills.description-three'),
    },
    {
      title: t('skills.title-four'),
      description: t('skills.description-four'),
    },
    {
      title: t('skills.title-five'),
      description: t('skills.description-five'),
    }
  ]

  return (
    <section id='skills' className={styles.section}>
      <div className={styles.section__container}>
        <RichText id='skills-title' variant='p1' text={t('skills.title')} className={styles.section__title} bold />
        <div className={styles.section__skills}>
          {
            skills.map((skill, index) => (
              <div key={index} className={styles.section__skills_container}>
                <RichText id={`skills-title-${index}`} variant='s2' text={skill.title} className={styles.section__skills_title} />
                <div className={styles.section__skills_list}>
                  <RichText id={`skills-description-${index}`} variant='p4' text={skill.description} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

Skills.displayName = 'Skills';

export default Skills;
