import NewspaperIcon from '@mui/icons-material/Newspaper';
import AlertPageLayout from '../../layouts/AlertLayout';

const NoNewsFoundAlert = () => {
  const icon = <NewspaperIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon}>
      no news found,
      <br />
      try something else or change filters
    </AlertPageLayout>
  );
};

export default NoNewsFoundAlert;
