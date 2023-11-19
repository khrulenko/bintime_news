import { Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AlertPageLayout from '../../layouts/AlertLayout';

const ErrorAlert = () => {
  const reload = () => window.location.reload();

  const actionButton = (
    <Button onClick={reload} variant="outlined">
      Reload
    </Button>
  );

  const icon = <SentimentVeryDissatisfiedIcon fontSize="large" />;

  return (
    <AlertPageLayout icon={icon} action={actionButton}>
      oops, something went wrong,
      <br />
      try reloading the page using the button below
    </AlertPageLayout>
  );
};

export default ErrorAlert;
