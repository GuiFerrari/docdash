import { useCallback, useMemo } from 'react';
import { FiFileText } from 'react-icons/fi';

import styles from './documents-list.module.scss';

import Card from './Card';

import { DocumentInterface } from '@/interfaces';

type DocumentsListProps = {
  documents: DocumentInterface[];
  removeDocument(document: DocumentInterface): void;
}

export default function DocumentsList({ documents, removeDocument }: DocumentsListProps) {
  const handleDeleteDocument = useCallback((document: DocumentInterface) => {
    removeDocument(document);
  }, [removeDocument]);

  const documentsTitle = useMemo(() => {
    if (documents.length === 1) {
      return `${documents.length} documento solicitado`;
    }
    return `${documents.length} documentos solicitados`;
  }, [documents]);

  if (documents.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>
            <FiFileText />
          </div>
          <span>Nenhum documento criado</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2>{documentsTitle}</h2>
      <div>
        {documents.map(document => (
          <Card
            document={document}
            removeDocument={handleDeleteDocument}
            key={document.id}
          />
        ))}
      </div>
    </div>
  )
}