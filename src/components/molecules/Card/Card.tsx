/** Resources */
import { Image, Navigate, RichText } from '@components';
import { Images } from '@assets';

/** Styles */
import styles from './styles.module.css';

type CardProps = {
  id: string;
  title: string;
  description?: string;
  src: keyof typeof Images;
  url: string;
};

const Card: React.FC<CardProps> = ({ id, title, description = '', src, url }) => (
  <Navigate id={`${id}-navigate`} href={url} className={styles.card} external>
    <div className={styles.card__container}>
      <Image src={src} alt={`${title} card image`} className={styles.card__img} width={280} />
    </div>
    <div className={styles.card__text}>
      <RichText id={id} variant='p2' text={title} />
      <RichText id={id} variant='s4' text={description} className={styles.card__description} />
    </div>
  </Navigate>
);

Card.displayName = 'Card';

export default Card;
