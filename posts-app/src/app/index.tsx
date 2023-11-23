import Main from '../pages/main';
import Posts from '../pages/posts';
import './styles/index.scss';

import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from './baseLayout';
import NotFoundPage from '../pages/not-found';
import { Post } from '../widgets/Post';
import UserPage from '../pages/user';
import Register from '../pages/register';
import Login from '../pages/login';
import PostForm from '../pages/post-form';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="form" element={<PostForm />} />
          <Route path="edit/:id" element={<PostForm />} />
          <Route path="user" element={<UserPage />} />
          <Route path="reg" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
