import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div>HEADER</div>

      <Outlet />

      <div>FOOTER</div>
    </>
  );
};

export default MainLayout;
