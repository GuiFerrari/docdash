import styles from './order-description.module.scss';

import OrderStatus from '@/components/OrderStatus';

export default function OrderDescription() {
  return (
    <div className={styles.orderDescription}>
      <div className={styles.orderHeader}>
        <h2>Lead: Documento para criar contrato</h2>
        <OrderStatus />
      </div>

      <div className={styles.orderBody}>
        <p>
          <span>Observação:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
          sollicitudin commodo faucibus. Nullam ut pharetra turpis. Vestibulum molestie 
          turpis ac tortor dapibus porttitor. Orci varius natoque penatibus et magnis 
          dis parturient montes, nascetur ridiculus mus. Etiam in elit vitae ligula 
          consectetur hendrerit id id odio. Vestibulum volutpat gravida arcu sit amet 
          tempus. In rhoncus leo vel dolor convallis gravida id a nulla.
        </p>
      </div>

      <div className={styles.orderFooter}>
        <div className={styles.orderFooterItem}>
          <div>
            <p>Criado por:</p>
            <span>João da Silva</span>
          </div>
        </div>

        <div className={styles.orderFooterItem}>
          <div>
            <p>Data de criação:</p>
            <span>11 de maio de 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}