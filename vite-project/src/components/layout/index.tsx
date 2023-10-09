import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Coffeteria - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;
