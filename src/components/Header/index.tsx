import React from 'react';
import { Head } from 'next/document';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>header</h1>
      </div>
    </>
  );
}

export default Header;