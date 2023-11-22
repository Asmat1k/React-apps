import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/appHooks';
import { useGetAllPostsQuery } from '../../shared/api/jsonApi';
import { Loader } from '../../widgets/Loader';
import { CustomPagination } from '../../widgets/Pagination';
import { PostCard } from '../../widgets/Post-card';

import styles from './posts.module.scss';
import { useDispatch } from 'react-redux';
import { changePage } from '../../app/appSlice';
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Posts() {
  const navigation = useNavigate();
  const { isLogged } = useAppSelector((state) => state.userReducer.user);
  if (!isLogged) {
    navigation('/');
  }

  const dispatch = useDispatch();
  const changeCurPageState = (num: number) => dispatch(changePage(num));

  const { startPostsPageFrom, isPagLoading } = useAppSelector(
    (state) => state.userReducer.pagination
  );
  const { data = [], isLoading } = useGetAllPostsQuery(
    startPostsPageFrom.toString()
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
      <CustomPagination
        isPosts
        startPageFrom={startPostsPageFrom}
        changeCurPage={changeCurPageState}
      />
      <Link className={styles.add} to="/form">
        <FloatButton
          style={{ bottom: 20, right: 20 }}
          icon={<PlusOutlined />}
          type="primary"
        />
      </Link>
    </main>
  );
}

export default Posts;
