import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Error = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong — <strong>check it out!</strong>
    </Alert>
  );
};

export default Error;
