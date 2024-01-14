import { initDND } from '@/shared/helpers/initDND';
import styles from './MainContent.module.css';
import { createElement } from '@/shared/lib/dom/createElement';
import { Notes } from '../Notes/Notes';
import { Fields } from '../Fields/Fields';

export const MainContent = () => {
  document.addEventListener('DOMContentLoaded', initDND);

  return createElement(
    'main',
    {
      className: styles.mainContent,
      id: 'main-content',
    },
    Notes,
    Fields
  );
};
