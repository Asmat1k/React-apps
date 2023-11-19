import { Card } from 'antd';
import { PostType } from '../../../shared/types/api';

import styles from './Post-card.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export function PostCard({ data }: { data: PostType }) {
  return (
    <Card
      className={styles.card}
      type="inner"
      title={`${data.id}. ${data.title.toLocaleUpperCase()}`}
      extra={<Link to={`/posts/${data.id}`}>Read</Link>}
    >
      <div className={styles.body}>
        <div className={styles.text}>{data.body.slice(0, 100)}...</div>
        <div className={styles.views}>
          <UserOutlined /> {data.body.length}
        </div>
      </div>
    </Card>
  );
}
