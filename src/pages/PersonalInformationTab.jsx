import { Container, Box, Grid, TextField } from "@mui/material";
import UserImageUploader from "../components/user/components/UserImageUploader/UserImageUploader";
import UserDetailsForm from "../components/user/components/UserDetailsForm/UserDetailsForm";
import { useAuthenticatedUserContext } from "../context/AuthenticatedUserContext";
import UserService from "../components/user/services/UserService";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ErrorMessages } from "../components/shared/ErrorsMessages/ErrorsMessages";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import ChangePassword from "../components/user/components/ChangePassword/ChangePassword";




const updateProfileValidationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    dateOfBirth: yup.string(),
}).required();


export default function PersonalInformationTab() {

    const { token, getUserData, updateUserData } = useAuthenticatedUserContext();
    const userData = getUserData();
    //#region image upload states
    const [file, setFile] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    //#endregion

    const [userDetails, setUserDetails] = useState(null);
    const userService = new UserService(token);

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
    const [backendErrors, setBackendErrors] = useState([]);
    const [submitUserDetailsLoading, setSubmitUserDetailsLoading] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState(dayjs('2024-01-01'));




    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(updateProfileValidationSchema),
        defaultValues: {
            firstName: userData?.firstName || '',
            lastName: userData?.lastName || '',
            phoneNumber: userData?.phoneNumber || '',
            email: userData?.email || '',
            dateOfBirth: userData?.dateOfBirth || '',


        }
    });



    const handleDateOfBirthChange = (newDate) => {
        if (newDate) {
            const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
            console.log(formattedDate);
            setValue('dateOfBirth', formattedDate);

        }

    };

    const onUserDetailsSubmit = async (data) => {
        setBackendErrors([]);
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
            setBackendErrors(error.response.data.errors || ['Something went wrong']);
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
                <ErrorMessages errors={backendErrors}></ErrorMessages>


                <Box component="form" noValidate onSubmit={handleSubmit(onUserDetailsSubmit)} sx={{ mt: 1 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={!!errors.firstName}
                                helperText={errors?.firstName?.message}
                                size="small"
                                variant="filled"
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                {...register('firstName')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={!!errors.lastName}
                                helperText={errors?.lastName?.message}
                                size="small"
                                variant="filled"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                {...register('lastName')}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                error={!!errors.email}
                                helperText={errors?.email?.message}
                                size="small"
                                variant="filled"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                {...register('email')}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={!!errors.phoneNumber}
                                helperText={errors?.phoneNumber?.message}
                                size="small"
                                variant="filled"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
                                {...register('phoneNumber')}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker

                                    label="Date Of Birth" name="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={handleDateOfBirthChange}
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            variant: "filled",
                                            fullWidth: true,
                                        },
                                    }}


                                />
                            </LocalizationProvider>

                        </Grid>


                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "end" }}>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"

                            loading={submitUserDetailsLoading}

                            loadingIndicator="Updating..."

                            sx={{ mt: 3, mb: 2, maxWidth: "200px", }}

                        >
                            Update
                        </LoadingButton>
                    </Grid>




                </Box>

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