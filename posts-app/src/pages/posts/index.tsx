import { useGetAllPostsQuery } from '../../shared/api/postsApi';
import { Loader } from '../../widgets/Loader';
import { PostCard } from '../../widgets/Post-card';

import styles from './posts.module.scss';

function Posts() {
  const { data = [], isLoading } = useGetAllPostsQuery('0');

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.container}>
      {data &&
        data.map((item) => {
          return <PostCard key={item.id} data={item} />;
        })}
    </main>
  );
}

export default Posts;
