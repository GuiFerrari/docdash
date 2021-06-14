import { Field } from 'formik';

import styles from './input.module.scss';

type InputProps = {
  name: string;
  title: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export default function Input({
  name,
  title,
  placeholder = "Digite aqui",
  required = false,
  error
}: InputProps) {
  return (
    <div className={`${styles.input} ${error && styles.fieldError}`}>
      <label htmlFor={name}>{title}: <span>{required && '*'}</span></label>
      <Field id={name} name={name} placeholder={placeholder} />
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}