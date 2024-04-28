import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAuthenticatedUserContext } from '../../../../context/AuthenticatedUserContext';
export default function UserImageUploader() {
    const { token } = useAuthenticatedUserContext();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                width: 'fit-content',
                gap: 1
            }}
        >
            <Avatar
                alt="User"
                sx={{ width: 80, height: 80, marginRight: 2 }}
            />
            <Button variant="contained" sx={{ marginRight: 1, paddingInline: 5, borderRadius: '8px', alignSelf: 'end' }}>
                Upload
            </Button>
            <Button variant="outlined" color="error" sx={{ paddingInline: 4, borderRadius: '8px', alignSelf: 'end' }} startIcon={<DeleteOutlineOutlinedIcon />}>
                Delete
            </Button>


        </Box>
    );
}
