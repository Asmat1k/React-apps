import { Alert } from 'antd';
import styles from './Alert.module.scss';
import { useState } from 'react';

interface AlertProps {
  type: 'success' | 'info' | 'warning' | 'error' | undefined;
  descr: string;
}

export function CustomAlert({ type, descr }: AlertProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <Alert
        className={styles.container}
        message="Warning"
        description={descr}
        type={type}
        showIcon
        closable
        afterClose={handleClose}
      />
    )
  );
}
