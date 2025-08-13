/** Resources */
import { Icon, Navigate, RichText } from '@components';

/** Styles */
import styles from './styles.module.css';

type CardProps = {
  id: string;
  title: string;
  description?: string;
  disclaimer?: string;
  url: string;
};

const Card: React.FC<CardProps> = ({ id, title, description = '', disclaimer = '', url }) => (
  <Navigate id={`${id}-navigate`} href={url} className={styles.card} external>
    <div className={styles.card__text}>
      <RichText id={id} variant='p2' text={title} bold className={styles.card__title}/>
      <RichText id={id} variant='s4' text={description} className={styles.card__description} />
      <RichText id={id} variant='s4' text={disclaimer} className={styles.card__disclaimer} />
    </div>
    <div className={styles.card__icon}>
      <Icon name='Chevron' height={24} width={24} />
    </div>
  </Navigate>
);

Card.displayName = 'Card';

export default Card;
