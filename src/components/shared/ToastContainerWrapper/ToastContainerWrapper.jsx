import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const ToastContainerCondition = () => {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const toastPosition = isSmallScreen ? 'top-center' : 'top-right';

    return (
        <ToastContainer
            position={toastPosition}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition:Bounce
        />
    );
};

export default ToastContainerCondition;