import { Pagination } from 'antd';
import { dataSlice } from '../../../app/appSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/appHooks';
import { useState } from 'react';

export function CustomPagination() {
  const { startPageFrom } = useAppSelector(
    (state) => state.userReducer.pagination
  );
  const [page, setPage] = useState(Math.ceil((startPageFrom + 1) / 5));

  const dispatch = useDispatch();
  const changeCurPageState = (num: number) => dispatch(changePage(num));
  const { changePage } = dataSlice.actions;

  return (
    <Pagination
      simple
      defaultCurrent={2}
      pageSize={5}
      current={page}
      total={100}
      showSizeChanger={false}
      onChange={(pagPage) => {
        setPage(pagPage);
        changeCurPageState(pagPage);
      }}
    />
  );
}
