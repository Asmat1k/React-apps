import { useParams } from 'react-router-dom';
import { useGetCommentsForPostQuery } from '../../../shared/api/jsonApi';
import { Comment } from '../../Comment/UI/Commnet';
import { Loader } from '../../Loader';

import styles from './Comments.module.scss';

export function Comments() {
  const { id } = useParams();
  const { data = [], isLoading } = useGetCommentsForPostQuery(`${id}`);

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
