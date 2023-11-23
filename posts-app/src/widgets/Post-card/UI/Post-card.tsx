import { Card } from 'antd';
import { PostType } from '../../../shared/types/api';

import styles from './Post-card.module.scss';
import { EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface PostCardProps {
  data: PostType;
  isDetailedMod?: boolean;
}

export function PostCard({ data, isDetailedMod = false }: PostCardProps) {
  const extraInner = isDetailedMod ? (
    <Link style={{ color: 'black' }} to="/form">
      <EditOutlined />
    </Link>
  ) : (
    <Link to={`/posts/${data.id}`}>Read</Link>
  );
  const text = isDetailedMod ? data.body : `${data.body.slice(0, 100)}...`;
  return (
    <>
      <Card
        className={styles.card}
        type="inner"
        title={`${data.id}. ${data.title.toLocaleUpperCase()}`}
        extra={extraInner}
      >
        <div className={styles.body}>
          <div className={styles.text}>{text}</div>
          <div className={styles.views}>
            <HeartOutlined /> {data.body.length}
          </div>
        </div>
      </Card>
      {isDetailedMod && <h2 className={styles.title}>Comments:</h2>}
    </>
  );
}
