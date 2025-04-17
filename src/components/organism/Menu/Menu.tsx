'use client';

/** Resources */
import { useMediaQuery } from '@hooks';
import { Desktop, Mobile } from './utils';
import { useTranslation } from 'react-i18next';

const Menu: React.FC = () => {
  const isDesktop = useMediaQuery('desktop');
  const { t } = useTranslation();

  const HEADER = [
    { url: '/#about', text: t('header.about') },
    { url: '/#skills', text: 'Skills' },
    { url: '/#work', text: t('header.work') },
    { url: '/#experience', text: t('header.experience') },
    { url: '/#projects', text: t('header.projects') },
    { url: '/#contact', text: t('header.contact') },
  ];

  return isDesktop ? <Desktop list={HEADER} /> : <Mobile list={HEADER} />
};

Menu.displayName = 'Menu';

export default Menu;
