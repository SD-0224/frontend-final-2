import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';

const PrimaryButton = ({ label, icon, onClick }) => {
    const theme = useTheme();

    return (
        <Button sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            padding: {
                xs: '4px 20px',
                sm: '5px 25px',
                md: '5px 35px',
            },
            borderRadius: '8px',
            width: {
                xs: '150px',
                sm: '160px',
                md: '180px'
            },
            height: '44px',
            '&:hover': {
                backgroundColor: '#2B6A8B',
            },
            textTransform: 'none',
            fontSize: {
                xs: '0.875rem',
                sm: '0.9375rem',
                md: '1rem',
            },
            '& .MuiButton-startIcon': {
                marginRight: '8px',
                fontSize: {
                    xs: '18px',
                    sm: '20px',
                    md: '24px',
                },
            }
        }}
            variant="contained"
            startIcon={icon ? <Icon>{icon}</Icon> : undefined}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default PrimaryButton;
