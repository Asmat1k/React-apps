import { Pagination } from 'antd';
import { useState } from 'react';

interface CustomPaginationProps {
  isPosts?: boolean;
  startPageFrom: number;
  //? Убрать ану
  changeCurPage: any;
}

export function CustomPagination({
  isPosts,
  startPageFrom,
  changeCurPage,
}: CustomPaginationProps) {
  const defaultPageStartFrom = isPosts
    ? Math.ceil((startPageFrom + 1) / 5)
    : startPageFrom + 1;
  const pageSize = isPosts ? 5 : 1;
  const total = isPosts ? 100 : 5;
  const [page, setPage] = useState(defaultPageStartFrom);

  return (
    <Pagination
      simple
      defaultCurrent={2}
      pageSize={pageSize}
      current={page}
      total={total}
      showSizeChanger={false}
      onChange={(pagPage) => {
        setPage(pagPage);
        changeCurPage(pagPage);
      }}
    />
  );
}
