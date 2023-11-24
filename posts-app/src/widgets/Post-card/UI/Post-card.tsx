import { Link } from 'react-router-dom';

import { DeleteOutlined, EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Card, message } from 'antd';

import { PostType } from '../../../shared/types/api';
import { useDeletePostMutation } from '../../../shared/api/jsonApi';

import styles from './Post-card.module.scss';

interface PostCardProps {
  data: PostType;
  isDetailedMod?: boolean;
}

export function PostCard({ data, isDetailedMod = false }: PostCardProps) {
  const [deletePost] = useDeletePostMutation();
  async function onDelete() {
    const response = await deletePost(data.id);
    if (response) message.success('You have successfully deleted the post');
    else message.error('Error in deleting a post!');
  }
  const extraInner = isDetailedMod ? (
    <div className={styles.extra}>
      <Link style={{ color: 'black' }} to={`/posts`}>
        <DeleteOutlined onClick={onDelete} />
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
