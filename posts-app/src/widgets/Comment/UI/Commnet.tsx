import { Card } from 'antd';
import { ComType } from '../../../shared/types/api';

import Meta from 'antd/es/card/Meta';
import { UserOutlined } from '@ant-design/icons';

import styles from './Comment.module.scss';

interface ComProps {
  data: ComType;
}

export function Comment({ data }: ComProps) {
  return (
    <Card style={{ width: 300 }}>
      <Meta
        avatar={<UserOutlined />}
        title={data.name}
        description={data.email}
      />
      <div className={styles.text}>{data.body}</div>
    </Card>
  );
}
