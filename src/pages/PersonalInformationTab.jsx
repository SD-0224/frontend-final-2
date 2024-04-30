import { Container, Box, Grid, TextField } from "@mui/material";
import UserImageUploader from "../components/user/components/UserImageUploader/UserImageUploader";
import { useAuthenticatedUserContext } from "../context/AuthenticatedUserContext";
import UserService from "../components/user/services/UserService";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import ChangePassword from "../components/user/components/ChangePassword/ChangePassword";
import UserDetailsForm from "../components/user/components/UserDetailsForm/UserDetailsForm";






export default function PersonalInformationTab() {

    const { token, getUserData, updateUserData } = useAuthenticatedUserContext();
    const userData = getUserData();
    const userService = new UserService(token);

    //#region image upload states
    const [file, setFile] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    //#endregion


    //#region image upload
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


    //#endregion


    //#region user details form states
    const [userDetails, setUserDetails] = useState(null);

    const [userDetialsBackendErrors, setUserDetailsBackendErrors] = useState([]);
    const [submitUserDetailsLoading, setSubmitUserDetailsLoading] = useState(false);





    const onUserDetailsSubmit = async (data) => {
        setUserDetailsBackendErrors([]);
        try {
            setSubmitUserDetailsLoading(true);
            console.log(data);
            const response = await userService.updateProfile(data);
            console.log('User details updated successfully:', response);
            const userData = getUserData();
            userData.firstName = response.user.firstName;
            userData.lastName = response.user.lastName;
            userData.phoneNumber = response.user.phoneNumber;
            userData.email = response.user.email;
            userData.dateOfBirth = response.user.dateOfBirth;

            updateUserData(userData);
            toast.success('User details updated successfully!');
        } catch (error) {
            console.error('Error updating user details:', error);
            setUserDetailsBackendErrors(error.response.data.errors || ['Something went wrong']);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setSubmitUserDetailsLoading(false);
        }
    }
    //#endregion

    //#region change password states
    const [changePasswordLoading, setChangePasswordLoading] = useState(false);
    const [changePasswordBackendErrors, setChangePasswordBackendErrors] = useState([]);
    const handleOnChangePasswordSubmit = async (data) => {
        console.log(data);
        setChangePasswordBackendErrors([]);
        try {
            setChangePasswordLoading(true);
            const response = await userService.changePassword(data);
            console.log('Password changed successfully:', response);
            toast.success('Password changed successfully!');
        } catch (error) {
            console.error('Error changing password:', error);
            setChangePasswordBackendErrors(['Something went wrong']);
            // setChangePasswordBackendErrors(error.response.data.errors || ['Something went wrong']);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setChangePasswordLoading(false);
        }
    }
    //#endregion




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
                <UserDetailsForm onSubmit={onUserDetailsSubmit}
                    loading={submitUserDetailsLoading} backendErrors={userDetialsBackendErrors} userData={getUserData()} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    margin: "7rem 0",
                }}
            >

                <ChangePassword backendErrors={changePasswordBackendErrors}
                    loading={changePasswordLoading} onSubmit={handleOnChangePasswordSubmit} />
            </Box>
        </Container>
    );
}