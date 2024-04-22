import { Box, Divider } from '@mui/material'
import React from 'react'
import CartDetails from '../Popup/CartDetails'
import CardVertical from '../CardVertical/CardVertical'

export default function WishlistDataContainer({ WishlistData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{}}>
        {WishlistData.map((item, index) => (
          <Box key={index}>
            <CardVertical item={item}/>
            <Divider/>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
