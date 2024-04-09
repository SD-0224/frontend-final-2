import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';


const PrimaryButton = ({ label, icon, onClick }) => {
    return (
        <Button sx={{
            backgroundColor: '#1B4B66', color: 'white',
            padding: '5px 35px 5px 35px', borderRadius: '8px',
            width: '180px',
            maxWidth: '180px',
            minWidth: '180px',
            height: '44px',
            '&:hover': {
                backgroundColor: '#2B6A8B',
                color: 'white',
            },
            textTransform: 'none',
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
