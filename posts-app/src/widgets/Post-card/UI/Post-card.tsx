import { Card } from 'antd';
import { PostType } from '../../../shared/types/api';

import styles from './Post-card.module.scss';
import { DeleteOutlined, EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDeletePostMutation } from '../../../shared/api/jsonApi';

interface PostCardProps {
  data: PostType;
  isDetailedMod?: boolean;
}

export function PostCard({ data, isDetailedMod = false }: PostCardProps) {
  const [deletePost] = useDeletePostMutation();
  const extraInner = isDetailedMod ? (
    <div className={styles.extra}>
      <Link style={{ color: 'black' }} to={`/posts`}>
        <DeleteOutlined onClick={() => deletePost(data.id)} />
      </Link>
      <Link style={{ color: 'black' }} to={`/posts/${data.id}/edit`}>
        <EditOutlined />
      </Link>
    </div>
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
