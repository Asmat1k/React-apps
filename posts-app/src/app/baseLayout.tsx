import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <header>THIS IS HEADER</header>
      <Outlet />
      <footer>THISI IS FOOTER</footer>
    </>
  );
}

export default BaseLayout;
