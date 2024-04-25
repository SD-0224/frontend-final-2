import React from 'react'
import { Stack, Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthenticatedUserContext } from '../../../context/AuthenticatedUserContext';
import { useUserPopupContext } from '../../../context/UserPopupContext';

export default function UserPopupLinks() {
  const { isAuthenticated } = useAuthenticatedUserContext();
  const { closeUserPopup } = useUserPopupContext();

  return (
    <>
      <Stack sx={{ listStyleType: "none", padding: "0px", margin: "0px" }}>
        {!isAuthenticated &&
          <>
            <Link component={RouterLink} to="/auth/login" onClick={() => closeUserPopup()} sx={{
              textDecoration: "none ",
              paddingBlock: "10px",
              ":hover": { backgroundColor: "#f5f5f5" }
            }}>Login</Link>
            <Link component={RouterLink} to="/auth/signup" onClick={() => closeUserPopup()} sx={{
              textDecoration: "none ",
              paddingBlock: "10px",
              ":hover": { backgroundColor: "#f5f5f5" }
            }}>Signup</Link>
          </>
        }

        {isAuthenticated &&

          <>
            <Link component={RouterLink} to="/" sx={{
              textDecoration: "none ",
              paddingBlock: "10px",
              ":hover": { backgroundColor: "#f5f5f5" }
            }}

              onClick={() => closeUserPopup()}
            >Profile </Link>
            <Link onClick={() => {
              console.log("Logout");
              closeUserPopup();
            }} sx={{
              textDecoration: "none ",
              paddingBlock: "10px",
              ":hover": { backgroundColor: "#f5f5f5", cursor: "pointer" }
            }}
            >Logout</Link>
          </>
        }
      </Stack>

    </>
  )

}