import styles from './order-status.module.scss';

export default function OrderStatus() {
  return (
    <div className={styles.orderStatus}>
      <div className={styles.statusWarning} />
      <span>Em andamento</span>
    </div>
  )
}