import { useAppSelector } from '../../app/appHooks';
import { useGetAllPostsQuery } from '../../shared/api/jsonApi';
import { Loader } from '../../widgets/Loader';
import { CustomPagination } from '../../widgets/Pagination';
import { PostCard } from '../../widgets/Post-card';

import styles from './posts.module.scss';

function Posts() {
  const { startPageFrom, isPagLoading } = useAppSelector(
    (state) => state.userReducer.pagination
  );
  const { data = [], isLoading } = useGetAllPostsQuery(
    startPageFrom.toString()
  );

  if (isLoading || isPagLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.container}>
      {data &&
        data.map((item) => {
          return <PostCard key={item.id} data={item} />;
        })}
      <CustomPagination />
    </main>
  );
}

export default Posts;
