import { useParams } from 'react-router-dom';
import { useGetCommentsForPostQuery } from '../../../shared/api/jsonApi';
import { Comment } from '../../Comment/UI/Commnet';

import styles from './Comments.module.scss';
import { useDispatch } from 'react-redux';
import { changeCommentsPage } from '../../../app/appSlice';
import { CustomPagination } from '../../Pagination';
import { useAppSelector } from '../../../app/appHooks';
import { LoadingOutlined } from '@ant-design/icons';

export function Comments() {
  const dispatch = useDispatch();
  const changeCurCommentsPage = (num: number) =>
    dispatch(changeCommentsPage(num));

  const { startComPageFrom, isPagLoading } = useAppSelector(
    (state) => state.userReducer.pagination
  );

  const { id } = useParams();
  const { data = [], isLoading } = useGetCommentsForPostQuery({
    id,
    startComPageFrom,
  });

  if (isLoading || isPagLoading)
    return (
      <div className={styles.loader}>
        <LoadingOutlined />
      </div>
    );

  return (
    <div className={styles.comments}>
      <div className={styles.wrapper}>
        {data &&
          data.map((item) => {
            return <Comment key={item.id} data={item} />;
          })}
        <div className={styles.comPag}>
          <CustomPagination
            startPageFrom={startComPageFrom}
            changeCurPage={changeCurCommentsPage}
          />
        </div>
      </div>
    </div>
  );
}
