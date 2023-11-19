import Main from '../pages/main';
import Posts from '../pages/posts';
import './styles/index.scss';

import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from './baseLayout';
import NotFoundPage from '../pages/not-found';
import Post from '../pages/post';
import UserPage from '../pages/user-page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
