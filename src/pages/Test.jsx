import { Box, Container } from "@mui/material";
import UserImageUploader from "../components/user/components/UserImageUploader/UserImageUploader";
import UserDetailsForm from "../components/user/components/UserDetailsForm/UserDetailsForm";
import { useAuthenticatedUserContext } from "../context/AuthenticatedUserContext";
import UserService from "../components/user/services/UserService";
import { useEffect, useState } from "react";
import LoadingIndicator from "../components/shared/LoadingIndicator/LoadingIndicator";

export default function TestPage() {

    const { token, getUserData, updateUserData } = useAuthenticatedUserContext();
    const [file, setFile] = useState(null);
    const [UserDetailsLoading, setUserDetailsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const userService = new UserService(token);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                setUserDetailsLoading(true);
                const userDetails = await userService.getUserDetails();
                setUserDetails(userDetails);

            } catch (error) {
                console.error('Failed to fetch user details:', error);
            } finally {
                setUserDetailsLoading(false);
            }
        };

        fetchUserDetails();

    }, [token]);

    const handleUpload = async () => {
        if (file) {
            try {
                const response = await userService.uploadImage(file);
                console.log('Image uploaded successfully:', response);
                const userData = getUserData();
                userData.image = response.imageURL;
                updateUserData(userData);



            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleOnDeleteImage = async () => { }

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
                    userDetails={userDetails} loading={UserDetailsLoading} />




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