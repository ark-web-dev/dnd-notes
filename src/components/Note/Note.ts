import { generateRGBColor } from '@/shared/lib/common';
import { createElement } from '@/shared/lib/dom/createElement';
import styles from './Note.module.css';

export const Note = () => {
  const inner = createElement(
    'div',
    { className: styles.noteInner, contentEditable: 'plaintext-only' },
    'Type something!'
  );

  inner.style.backgroundColor = generateRGBColor(100, 255);

  return createElement(
    'div',
    {
      className: [styles.note, 'targetNote'].join(' '),
    },
    inner
  );
};
