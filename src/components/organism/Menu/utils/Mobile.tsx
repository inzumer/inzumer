'use client';

/** Resources */
import { useState, useEffect } from 'react';
import { Button, Icon, RichText } from '@components';

/** Styles */
import styles from '../styles.module.css';

interface Item {
  url: string;
  text: string;
}

interface MobileProps {
  list: Item[];
}

const Mobile: React.FC<MobileProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const actionButtons = (url: string) => {
    window.location.href = url;

    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header id='header' data-testid='header' className={styles.menu}>
      <div className={styles.menu__mobile}>
        <Button id='menu-icon' event={() => actionButtons('/')} className={styles.menu__mobile_button}>
          <RichText id={`menu-item-icon`} variant='p2' text={'inz'} className={styles.menu__item_text} bold />
        </Button>

        {!isOpen && (
          <Button id='menu-button-mobile' event={toggleMenu} className={`${styles.menu__mobile_button} ${styles.menu__buttons}`}>
            <Icon name='MenuBurger' height={32} width={32} />
          </Button>
        )}
      </div>

      <div className={`${styles.menu__overlay} ${isOpen && styles.menu__overlay_open}`}>
        <div className={styles.menu__overlay_header}>
          <Button id='menu-button-mobile-close' event={toggleMenu} className={styles.menu__mobile_button}>
            <Icon name='MenuClose' height={32} width={32} />
          </Button>
        </div>
        <div className={styles.menu__overlay_content}>
          {list.map(({ url, text }, index) => (
            <Button key={url} id={`menu-item-button-${index}`} className={styles.menu__item} event={() => actionButtons(url)}>
              <RichText id={`menu-item-character-${index}`} variant='s3' text={'//'} className={styles.menu__item_character} />
              <RichText id={`menu-item-${index}`} variant='s3' text={text} className={styles.menu__item_text} />
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

Mobile.displayName = 'Mobile';

export default Mobile;
