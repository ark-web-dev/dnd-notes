import { createElement } from '@/shared/lib/dom/createElement';
import styles from './Field.module.css';

type FieldProps = {
  className: string;
  title: string;
};

export const Field = ({ className, title }: FieldProps) => {
  return createElement(
    'div',
    { className: [styles.field, className].join(' ') },
    createElement('h2', { className: styles.fieldTitle }, title)
  );
};
