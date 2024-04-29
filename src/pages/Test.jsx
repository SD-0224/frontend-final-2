import { Box, Container } from "@mui/material";
import UserImageUploader from "../components/user/components/UserImageUploader/UserImageUploader";
import UserDetailsForm from "../components/user/components/UserDetailsForm/UserDetailsForm";
import { useAuthenticatedUserContext } from "../context/AuthenticatedUserContext";
import UserService from "../components/user/services/UserService";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function TestPage() {

    const { token, getUserData, updateUserData } = useAuthenticatedUserContext();
    const [file, setFile] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const userService = new UserService(token);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setImageLoading(true);
                const userDetails = await userService.getUserDetails();
                setUserDetails(userDetails);

            } catch (error) {
                console.error('Failed to fetch user details:', error);
            } finally {
                setImageLoading(false);
            }
        };

        fetchUserDetails();

    }, [token]);

    const handleUpload = async () => {
        if (file) {
            try {
                setImageLoading(true);
                const response = await userService.uploadImage(file);
                console.log('Image uploaded successfully:', response);
                const userData = getUserData();
                userData.image = response.imageURL;
                updateUserData(userData);
                toast.success('Image uploaded successfully!');


            } catch (error) {
                console.error('Error uploading image:', error);
                toast.error('Error uploading image!');
            } finally {
                setImageLoading(false);
            }

        }
    };

    const handleOnDeleteImage = async () => {
        try {
            setImageLoading(true);
            const response = await userService.deleteImage();
            console.log('Image deleted successfully:', response);
            const userData = getUserData();
            userData.image = null;
            setFile(null);

            updateUserData(userData);
            toast.success('Image deleted successfully!');
        } catch (error) {
            console.error('Error deleting image:', error);
            toast.error('Error deleting image!');
        } finally {
            setImageLoading(false);
        }
    }

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    margin: "7rem 0",
                }}
            >

                <UserImageUploader file={file} setFile={setFile} onUploadSubmit={handleUpload}
                    userDetails={getUserData()} loading={imageLoading} onDeleteImage={handleOnDeleteImage} />




            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    margin: "7rem 0",
                }}
            >
                <UserDetailsForm />

            </Box>
        </Container>
    );
}