import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAuthenticatedUserContext } from '../../../../context/AuthenticatedUserContext';
import UserService from '../../services/UserService'; // Import the UserService class
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useState } from 'react';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UserImageUploader() {
    const { token } = useAuthenticatedUserContext();
    const [file, setFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');


    const userService = new UserService(token);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setAvatarUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpload = async () => {
        if (file) {
            try {
                const response = await userService.uploadImage(file);
                console.log('Image uploaded successfully:', response);

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                width: 'fit-content',
                gap: 1,
            }}
        >
            <Avatar
                alt="User"
                src={avatarUrl}
                sx={{ width: 80, height: 80, marginRight: 2 }}
            />
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{ alignSelf: 'end', paddingInline: 4, borderRadius: '8px' }}
                startIcon={<CloudUploadIcon />}
            >
                Upload
                <VisuallyHiddenInput
                    accept="image/*"
                    type="file"
                    onChange={handleFileChange}
                    id="file-input"
                />
            </Button>

            <Button
                variant="outlined"
                color="error"
                sx={{ paddingInline: 4, borderRadius: '8px', alignSelf: 'end' }}
                startIcon={<DeleteOutlineOutlinedIcon />}
            >
                Delete
            </Button>

            <Button
                variant="contained"
                color="primary"
                sx={{ paddingInline: 4, borderRadius: '8px', alignSelf: 'end' }}
                onClick={handleUpload}
                disabled={!file}
            >
                Submit
            </Button>
        </Box>
    );
}
