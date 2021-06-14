import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';
import MaskedInput from 'react-input-mask';

import styles from './input-mask.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
  ...rest
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
            {...rest}
          />
        )}
      </Field>
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}