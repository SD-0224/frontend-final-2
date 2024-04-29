import { Typography } from '@mui/material'
import React from 'react'

export default function ComingSoon() {
  return (
    <Typography
          sx={{
            whiteSpace: "pre-wrap",
            fontSize: {
              xs: "13px", // Font size for extra small screens (less than 600px)
              sm: "16px", // Font size for small screens (600px and up)
            },
          }}
        >
          Coming Soon ...
        </Typography>
  )
}
