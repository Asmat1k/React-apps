import { useGetOnePostQuery } from '../../shared/api/postsApi';
import { PostType } from '../../shared/types/api';
import { Loader } from '../../widgets/Loader';
import styles from './post.module.scss';

import { useParams } from 'react-router-dom';
import { PostCard } from '../../widgets/Post-card';

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
          <PostCard data={postData} isDetailedMod={true} />
        </div>
      )}
    </>
  );
}

export default Post;
