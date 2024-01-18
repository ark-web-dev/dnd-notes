import { createElement } from '@/shared/lib';
import styles from './Field.module.css';

type FieldProps = {
  id: string;
  title: string;
};

export const Field = ({ id, title }: FieldProps) => {
  return createElement(
    'div',
    { className: styles.field, id: id },
    createElement('h2', { className: styles.fieldTitle }, title)
  );
};
