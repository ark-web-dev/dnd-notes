import { createElement } from '@/shared/lib';
import styles from './Fields.module.css';
import { Field } from '../Field/Field';

export const Fields = () => {
  return createElement(
    'div',
    { className: styles.fields },

    Field({ id: 'field1', title: 'Boring Board' }),
    Field({ id: 'field2', title: 'Fun Board' })
  );
};
