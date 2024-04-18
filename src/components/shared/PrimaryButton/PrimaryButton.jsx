import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';

const PrimaryButton = ({ label, icon, onClick }) => {
    const theme = useTheme();

    return (
        <Button sx={{
            backgroundColor: theme.palette.primary.main,
            flexGrow: 1,
            color: 'white',
            padding: {
                xs: '2px 10px',
                sm: '2px 15px',
                md: '5px 35px',
            },
            borderRadius: '8px',
            width: {
                xs: '70px',
                sm: '105px',
                md: '180px',
            },
            minWidth: {
                xs: '20px',
                sm: '40px',
            },
            height: {
                xs: '20px', // Smaller height on extra small screens
                sm: '30px', // Medium height on small screens, larger screens will use the default height
                md: '44px'
            },

            '&:hover': {
                backgroundColor: '#2B6A8B',
            },
            textTransform: 'none',
            fontSize: {
                xs: '8px',
                sm: '12px',
                md: '1rem',
            },

        }}
            variant="contained"
            startIcon={icon ? <Icon sx={{ fontSize: { xs: '8px !important', sm: '12px !important', md: '1rem !important' } }}>{icon}</Icon> : undefined
            }
            onClick={onClick}
        >
            {label}
        </Button >
    );
};

export default PrimaryButton;
