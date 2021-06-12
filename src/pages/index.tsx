
import styles from './index.module.scss';

import OrderDescription from '@/components/OrderDescription'
import Form from '@/components/Form'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="grid grid-template-columns-1">
        <h1>Pedido #1</h1>
      </div>
  
      <div className="grid grid-template-columns-1">
        <OrderDescription />
      </div>

      <div className="grid grid-template-columns-2 gap-20 mt-1">
        <Form title="Adicionar documentos ao pedido" />
        <h2>lado 2</h2>
      </div>
    </div>
  )
}
