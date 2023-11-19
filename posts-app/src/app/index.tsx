import Main from '../pages/main';
import Posts from '../pages/posts';
import './styles/index.scss';

import { Routes, Route } from 'react-router-dom';
import BaseLayout from './baseLayout';
import NotFoundPage from '../pages/not-found';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
