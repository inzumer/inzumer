'use client';

/** Resources */
import { useState } from 'react';
import { Icon, Navigate, RichText } from '@components';
import { useMediaQuery } from '@hooks';
import { Icons } from '@assets';

/** Styles */
import styles from './styles.module.css';

interface QuestionProps {
  id: string;
  title: string;
  date: string;
  location: string;
  link: string;
  url: string;
  icon: keyof typeof Icons;
  description: string;
  list: string[];
}

const Question: React.FC <QuestionProps> = ({ id, title, date, location, link, url, icon, description, list }) => {
  const isDesktop = useMediaQuery('desktop');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.question}>

      <div className={`${styles.question__header} ${isOpen && styles.question__header_active }`} onClick={toggle}>
        <div className={styles.question__title}>
          <RichText id={`question-title-${id}`} text={title} variant='s3' className={styles.question__text} bold />
          { isDesktop && <RichText id={`question-date-${id}`} text={date} variant='s3' className={styles.question__text} bold /> }
        </div>
        <RichText id={`question-icon-${id}`} text={isOpen ? '−' : '+'} variant='s2' className={styles.question__icon} bold />
      </div>

      <div className={`${styles.question__content} ${isOpen && styles.question__content_open}`}>
        { !isDesktop && <Icon name={icon} height={80} width={80} /> }

        <div className={styles.question__description_header}>
          <div className={styles.question__description_location}>
            <Icon name='Location' height={16} width={16} />
            <RichText id={id} text={location} variant='s3' className={styles.question__disclaimer} />
          </div>
          <Navigate id={`question-link-${link}`} href={url} className={styles.question__description_link} external>
            <Icon name='Link' height={16} width={16} />
            <RichText id={id} text={link} variant='s3' className={styles.question__disclaimer} />
          </Navigate>
        </div>

        <div className={styles.question__description}>
          <RichText id={id} text={description} variant='p4' className={styles.question__description_text} />
          { isDesktop && <Icon name={icon} height={80} width={80}  /> }
        </div>

        <div className={styles.question__pill}>
          {
            list.map((item, index) => (
              <RichText key={index} id={`pill-${item}-${index}`} text={item} variant='s4' className={styles.question__pill_text} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

Question.displayName = 'Question';

export default Question;
