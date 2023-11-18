import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <div>FOOTER</div>
    </>
  );
};

export default MainLayout;
