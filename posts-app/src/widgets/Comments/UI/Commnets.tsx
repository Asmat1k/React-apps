import { useGetAllCommentsQuery } from '../../../shared/api/jsonApi';
import { Comment } from '../../Comment/UI/Commnet';
import { Loader } from '../../Loader';

import styles from './Comments.module.scss';

export function Comments() {
  const { data = [], isLoading } = useGetAllCommentsQuery(`5`);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>Comments:</h2>
      <div className={styles.wrapper}>
        {data &&
          data.map((item) => {
            return <Comment key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}
