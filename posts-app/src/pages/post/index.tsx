import { EditOutlined } from '@ant-design/icons';
import { useGetOnePostQuery } from '../../shared/api/postsApi';
import { PostType } from '../../shared/types/api';
import { Loader } from '../../widgets/Loader';
import styles from './post.module.scss';

import { useParams } from 'react-router-dom';
import { Card } from 'antd';

function Post() {
  const { id } = useParams();
  const { data = [], isLoading } = useGetOnePostQuery(id!);

  if (isLoading) {
    return <Loader />;
  }

  const postData = data as PostType;

  return (
    <>
      {postData && (
        <div className={styles.wrapper}>
          <Card
            title={`${postData.id}. ${postData.title.toUpperCase()}`}
            extra={<EditOutlined />}
            className={styles.card}
          >
            <div className={styles.text}>{postData.body}</div>
          </Card>
        </div>
      )}
    </>
  );
}

export default Post;
