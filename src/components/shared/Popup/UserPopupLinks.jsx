import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthenticatedUserContext } from '../../../context/AuthenticatedUser';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

export default function UserPopupLinks() {
    const { isAuthenticated } = useAuthenticatedUserContext();
  return isAuthenticated? (
    <Typography
        variant="subtitle1"
        sx={{
          padding: "20px 0px",
          textAlign: "center",
          fontSize: "24px",
          color: "textSecondary",
        }}
      >
        Hello ! !
      </Typography>
  ) : (
    <Stack>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Signup</Link>
        <SecondaryButton label={'Logout'} icon={''} onClick={''}/>
    </Stack>
  );
}