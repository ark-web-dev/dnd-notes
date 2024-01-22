import styles from './MainContent.module.css';
import { createElement } from '@/shared/lib/dom/createElement';
import { Notes } from '../Notes/Notes';
import { Fields } from '../Fields/Fields';
import { initDragAndDrop } from '@/shared/lib/DragAndDrop';
import { Note } from '../Note/Note';

export const MainContent = () => {
  document.addEventListener('DOMContentLoaded', () => {
    initDragAndDrop({
      dragAreaSelector: '#notes',
      dragElementSelector: '.targetNote',
      dropAreaSelector: '.dropField',
      removeOnDropOutside: true,

      onPointerMoveOnceCallback: ({ returnToArea }) => {
        if (!returnToArea?.children.length) returnToArea?.append(Note());
      },
    });
  });

  return createElement(
    'main',
    {
      className: styles.mainContent,
      id: 'main-content',
    },
    Notes,
    Notes,
    Fields
  );
};
