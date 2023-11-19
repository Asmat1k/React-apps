import { useGetAllPostsQuery } from '../../shared/api/postsApi';

function Posts() {
  const { data = [], isLoading } = useGetAllPostsQuery('');
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default Posts;
