import { ReactNode } from 'react';
import { LinearProgress } from '@mui/material';

interface Props {
  isLoading: boolean;
  children: ReactNode;
}

const WithLoading = ({ isLoading, children }: Props) => {
  return <>{isLoading ? <LinearProgress color="secondary" /> : children}</>;
};

export default WithLoading;
