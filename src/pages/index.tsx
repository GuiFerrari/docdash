
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import styles from './index.module.scss';

import OrderDescription from '@/components/OrderDescription'
import Form from '@/components/Form'
import DocumentsList from '@/components/DocumentsList'

import { DocumentInterface } from '@/interfaces';

export default function Home() {
  const [documents, setDocuments] = useState<DocumentInterface[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3333/documents').then(response => {
      setDocuments(response.data);
    })
  }, []);

  const handleAddData = useCallback(data => {
    setDocuments(prevState => [...prevState, data]);
  }, []);

  const handleDeleteDocument = useCallback(async (document: DocumentInterface) => {

    try {
      await axios.delete(`http://localhost:3333/documents/${document.id}`);
      setDocuments(prevState => prevState.filter(documentData => documentData.id !== document.id));
      toast.success('Documento removido com sucesso!');
    } catch {
      toast.error('Houve um erro ao deletar o documento!');
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className="grid grid-template-columns-1">
        <h1>Pedido #1</h1>
      </div>
  
      <div className="grid grid-template-columns-1">
        <OrderDescription />
      </div>

      <div className="grid grid-template-columns-2 gap-20 mt-1">
        <Form title="Adicionar documentos ao pedido" handleAddData={handleAddData} />
        <h2>
          <DocumentsList documents={documents} removeDocument={handleDeleteDocument} />
        </h2>
      </div>
    </div>
  )
}
