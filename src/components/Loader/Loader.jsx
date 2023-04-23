import { Dna } from 'react-loader-spinner';

import useMediaQuery from '@mui/material/useMediaQuery';
import Backdrop from '@mui/material/Backdrop';

const Loader = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Backdrop
      open={true}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#fff',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Dna
        visible={true}
        height="200"
        width={isMobile ? '200' : '300'}
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </Backdrop>
  );
};

export default Loader;
