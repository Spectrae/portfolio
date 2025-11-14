// src/components/Blobs/index.tsx
import styles from '@/styles/blobs.module.css';

const Blobs = () => {
  return (
    <div className={styles.blobContainer}>
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
    </div>
  );
};

export default Blobs;