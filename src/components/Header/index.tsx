import React from 'react';
import Image from 'next/image'

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Image src="/images/logo_docket.png" alt="Logo Docket Brasil" width="57" height="40" />
      </div>
    </div>
  );
}

export default Header;