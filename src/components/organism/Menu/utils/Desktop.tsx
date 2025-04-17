'use client';

/** Resources */
import { Navigate, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

interface Item {
  url: string;
  text: string;
}

interface DesktopProps {
  list: Item[];
}

const Desktop: React.FC<DesktopProps> = ({ list }) => (
  <header id='header' data-testid='header' className={styles.menu}>
    <div className={styles.menu__container}>
      <Navigate id='menu-icon' href='/' className={styles.menu__logo}>
        <RichText id={`menu-item-icon`} variant='p1' text={'inz'} className={styles.menu__item_text} />
      </Navigate>
      <nav className={styles.navbar}>
        {list.map(({ url, text }, index) => (
          <Navigate key={url} id={`menu-navigate-item-${index}`} href={url} className={styles.menu__item}>
            <RichText id={`menu-character-item-${index}`} variant='s3' text={'//'} className={styles.menu__item_character} />
            <RichText id={`menu-item-text-${index}`} variant='s3' text={text} className={styles.menu__item_text} />
          </Navigate>
        ))}
      </nav>
    </div>
  </header>
);

Desktop.displayName = 'Desktop';

export default Desktop;
