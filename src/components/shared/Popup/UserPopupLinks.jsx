import React from 'react'
import { Stack, Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthenticatedUserContext } from '../../../context/AuthenticatedUser';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

export default function UserPopupLinks() {
  const { isAuthenticated } = useAuthenticatedUserContext();
  return isAuthenticated ? (
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
    <Stack sx={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
      <Link component={RouterLink} to="/auth/login" sx={{
        textDecoration: "none ",
        paddingBlock: "10px",
        ":hover": { backgroundColor: "#f5f5f5" }
      }}>Login</Link>
      <Link component={RouterLink} to="/auth/signup" sx={{
        textDecoration: "none ",
        paddingBlock: "10px",
        ":hover": { backgroundColor: "#f5f5f5" }
      }}>Signup</Link>
      <Link onClick={() => console.log("logout")} sx={{
        textDecoration: "none ",
        paddingBlock: "10px",
        ":hover": { backgroundColor: "#f5f5f5", cursor: "pointer" }
      }}>Logout</Link>
    </Stack>
  );
}