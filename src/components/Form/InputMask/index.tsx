import { Field } from 'formik';
import MaskedInput from 'react-input-mask';

import styles from './input-mask.module.scss';

type InputProps = {
  name: string;
  title: string;
  placeholder?: string;
  mask: string;
  required?: boolean;
  error?: string;
}

export default function InputMask({
  name,
  title,
  placeholder = "Digite aqui",
  mask,
  required = false,
  error,
}: InputProps) {
  return (
    <div className={`${styles.input} ${error && styles.fieldError}`}>
      <label htmlFor={name}>{title}: <span>{required && '*'}</span></label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
      >
        {({field}) => (
          <MaskedInput
            {...field}
            placeholder={placeholder}
            mask={mask}
          />
        )}
      </Field>
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}