import { createElement } from '@/shared/lib';
import styles from './Notes.module.css';
import { Note } from '../Note/Note';

export const Notes = () => {
  return createElement('div', { className: styles.notes, id: 'notes' }, Note);
};
