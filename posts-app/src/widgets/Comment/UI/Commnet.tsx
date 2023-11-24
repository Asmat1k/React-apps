import { Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

import { ComType } from '../../../shared/types/api';

import styles from './Comment.module.scss';

interface ComProps {
  data: ComType;
}

export function Comment({ data }: ComProps) {
  return (
    <Card className={styles.card}>
      <Meta
        className={styles.meta}
        avatar={<UserOutlined className={styles.user} />}
        title={data.name}
        description={data.email}
      />
      <div className={styles.text}>{data.body}</div>
    </Card>
  );
}
