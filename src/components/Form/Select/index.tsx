import { Field } from 'formik';

import styles from './select.module.scss';

type SelectProps = {
  name: string;
  title: string;
  defaultValue?: string;
  required?: boolean;
  onChange?(e: any): void;
  error?: string;
}

export default function Select({
  name,
  title,
  required = false,
  onChange,
  error
}: SelectProps) {
  return (
    <div className={`${styles.select} ${error && styles.fieldError}`} onChange={onChange}>
      <label htmlFor={name}>{title}: <span>{required && '*'}</span></label>
      <Field as="select" name={name}>
        <option value="fisical">Pessoa física</option>
        <option value="legal">Pessoa jurídica</option>
      </Field>
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}