import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return <div>{id} POST</div>;
}

export default Post;
