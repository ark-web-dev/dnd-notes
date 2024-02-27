import styles from './Fields.module.css';
import { Field } from '../Field/Field';
import { createElement } from '@/shared/lib/dom/createElement';

export const Fields = () => {
  return createElement(
    'div',
    { className: styles.fields },

    Field({
      className: ['dropField', styles.fieldStatic].join(' '),
      title: 'Boring Board',
    }),
    Field({
      className: ['dropField', styles.fieldRelative].join(' '),
      title: 'Fun Board',
    })
  );
};
