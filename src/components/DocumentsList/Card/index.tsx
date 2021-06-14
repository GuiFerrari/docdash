import { useCallback, useMemo } from 'react';
import { FiTrash } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './card.module.scss';

import { DocumentInterface } from '@/interfaces';

type CardProps = {
  document: DocumentInterface;
  removeDocument(document: DocumentInterface): void;
}

export default function Card({ document, removeDocument }: CardProps) {
  const handleDeleteDocument = useCallback(() => {
    removeDocument(document);
  }, [removeDocument]);

  const personTypeTitle = useMemo(() => {
    if (document.personType === 'fisical') {
      return 'Pessoa física';
    }

    return 'Pessoa jurídica';
  }, [document.personType]);

  const documentTitle = useMemo(() => {
    if (document.personType === 'fisical') {
      return 'CPF';
    }

    return 'CNPJ';
  }, [document.personType]);

  const createdFormatted = useMemo(
    () =>
      format(Date.parse(document.created), `dd 'de' MMMM 'de' uuuu`, {
        locale: ptBR,
      }),
    [document.created],
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>{document.documentName}</h2>
        <button type="button" onClick={handleDeleteDocument}>
          <FiTrash size={18} />
        </button>
      </div>

      <div className={styles.cardBody}>
        <div className="grid grid-template-columns-1-1 gap-20">
          <div className={styles.bodyItem}>
            <h4>{personTypeTitle}</h4>
            <div>
              <p>Nome: {document.name}</p>
              <p>{documentTitle}: {document.document}</p>
            </div>
          </div>
          <div className={styles.bodyItem}>
            <h4>Dados do cartório</h4>
            <div>
              <p>CEP: {document.cep}</p>
              <p>Rua: {document.street}</p>
              <p>Nº: {document.number}</p>
              <p>Cidade: {document.city}</p>
              <p>Estado: {document.uf}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <p>Data de criação: <span>{createdFormatted}</span></p>
      </div>
    </div>
  )
}