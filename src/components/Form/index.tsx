import styles from './form.module.scss';

export default function Form({
  title = 'Formulário'
}) {
  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>{title}</h2>
      </div>

      <div className={styles.formBody}>
        asudhasuidas
      </div>
    </div>
  )
}