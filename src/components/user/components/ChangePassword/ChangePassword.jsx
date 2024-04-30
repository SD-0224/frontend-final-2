import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessages } from '../../../shared/ErrorsMessages/ErrorsMessages';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const changePasswordValidationSchema = yup.object({
    currentPassword: yup.string().required('Old Password is required'),
    newPassword: yup.string().required('New Password is required'),
    confirmNewPassword: yup.string().required('Confirm New Password is required')
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')

}).required();


const ChangePassword = ({ onSubmit, loading, backendErrors }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordValidationSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''


        }
    });

    return (
        <>

            <Typography component="h1" variant='h5' sx={{
                borderBottom: '1px solid #ccc', paddingBottom: '10px',
                fontWeight: 'medium'
            }}>
                Change Password
            </Typography>
            <ErrorMessages errors={backendErrors}></ErrorMessages>

            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, maxWidth: '350px' }}>


                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body1" fontWeight={'500'} gutterBottom>
                            Current Password
                        </Typography>
                        <TextField
                            error={!!errors.currentPassword}
                            helperText={errors?.currentPassword?.message}
                            autoComplete="currentPassword"
                            name="currentPassword"
                            required
                            fullWidth
                            id="currentPassword"
                            type="password"
                            size="small"
                            variant="filled"
                            autoFocus
                            {...register('currentPassword')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" fontWeight={'500'} gutterBottom>
                            New Password
                        </Typography>
                        <TextField
                            error={!!errors.newPassword}
                            helperText={errors?.newPassword?.message}
                            autoComplete="newPassword"
                            name="newPassword"
                            required
                            fullWidth
                            id="newPassword"
                            type="password"
                            size="small"
                            variant="filled"
                            autoFocus
                            {...register('newPassword')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body1" fontWeight={'500'} gutterBottom>
                            Confirm New Password
                        </Typography>
                        <TextField
                            error={!!errors.confirmNewPassword}
                            helperText={errors?.confirmNewPassword?.message}
                            autoComplete="confirmNewPassword"
                            name="confirmNewPassword"
                            required
                            fullWidth
                            id="confirmNewPassword"
                            type="password"
                            size="small"
                            variant="filled"
                            autoFocus
                            {...register('confirmNewPassword')}
                        />
                    </Grid>
                </Grid>
                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    loading={loading}
                    loadingIndicator="Updating Password..."
                    sx={{ mt: 3, mb: 2 }}

                >
                    Change
                </LoadingButton>
            </Box>
        </>
    )
}

export default ChangePassword;