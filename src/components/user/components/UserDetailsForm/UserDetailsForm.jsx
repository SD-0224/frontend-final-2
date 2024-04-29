import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useState } from 'react';


const UserDetailsForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const handleDateChange = (newDate) => {
        setDateOfBirth(newDate);
    };

    return (

        <>
            <Box component="form" noValidate sx={{ mt: 1 }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            size="small"
                            variant="filled"
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            size="small"
                            variant="filled"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            variant="filled"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            size="small"
                            variant="filled"
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Phone Number"
                            name="phoneNumber"
                            autoComplete="phoneNumber"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker

                                label="Date of Birth"
                                value={dateOfBirth}
                                onChange={handleDateChange}
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

                        sx={{ mt: 3, mb: 2, maxWidth: "200px", }}

                    >
                        Update
                    </LoadingButton>
                </Grid>




            </Box>

        </>
    )
}

export default UserDetailsForm;