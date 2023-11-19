import Main from '../pages/main';
import Posts from '../pages/posts';
import './styles/index.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
