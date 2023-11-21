import { useGetOnePostQuery } from '../../../shared/api/jsonApi';
import { PostType } from '../../../shared/types/api';
import { Loader } from '../../Loader';
import styles from './post.module.scss';

import { useParams } from 'react-router-dom';
import { PostCard } from '../../Post-card';
import { Comments } from '../../Comments';

export function Post() {
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
          <PostCard data={postData} isDetailedMod={true} />
          <Comments />
        </div>
      )}
    </>
  );
}

export default Post;
