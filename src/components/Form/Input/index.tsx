import { Field } from 'formik';

import styles from './input.module.scss';

type InputProps = {
  name: string;
  title: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean
  error?: string;
}

export default function Input({
  name,
  title,
  placeholder = "Digite aqui",
  required = false,
  disabled = false,
  error,
}: InputProps) {
  return (
    <div className={`${styles.input} ${error && styles.fieldError} ${disabled && styles.disabled}`}>
      <label htmlFor={name}>{title}: <span>{required && '*'}</span></label>
      <Field id={name} name={name} placeholder={placeholder} disabled={disabled} />
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}