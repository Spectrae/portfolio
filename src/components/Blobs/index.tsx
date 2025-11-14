'use client';

import styles from '@/styles/blobs.module.css';

const Blobs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
    </div>
  );
};

export default Blobs;
