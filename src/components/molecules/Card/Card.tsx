/** Resources */
import { Image , Navigate, RichText } from '@components';
import { useMediaQuery } from '@hooks';
import { Images } from '@assets';

/** Styles */
import styles from './styles.module.css';

type CardProps = {
  id: string;
  title: string;
  src: keyof typeof Images;
  url: string;
};

const Card: React.FC<CardProps> = ({ id, title, src, url }) => {
  const isDesktop = useMediaQuery('desktop');

  return (
    <Navigate id={`${id}-navigate`} href={url} className={styles.card}>
      <div className={styles.card__container}>
        <Image src={src} alt={`${title} card image`} className={styles.card__img} width={isDesktop ? 400 : 300} height={isDesktop ? 300 : 200} />
      </div>
      <RichText id={id} variant='p2' text={title} className={styles.card__title}/>
    </Navigate>
  );
};

export default Card;
