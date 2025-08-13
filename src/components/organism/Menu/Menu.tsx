'use client';

/** Resources */
import { Mobile } from './utils';
import { useTranslation } from 'react-i18next';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  const HEADER = [
    { url: '/#about', text: t('header.about') },
    { url: '/#projects', text: t('header.projects') },
    { url: '/#contact', text: t('header.contact') },
  ];

  return <Mobile list={HEADER} />
};

Menu.displayName = 'Menu';

export default Menu;
