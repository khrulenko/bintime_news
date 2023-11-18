import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainLayout = () => {
  return (
    <Stack minHeight="100vh" height="100%">
      <Header />

      <Stack flexGrow="1" padding="32px 136px 60px">
        <Outlet />
      </Stack>

      <Footer />
    </Stack>
  );
};

export default MainLayout;
