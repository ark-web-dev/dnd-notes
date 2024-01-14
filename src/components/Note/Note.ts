import { createElement, generateRGBColor } from '@/shared/lib';
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
