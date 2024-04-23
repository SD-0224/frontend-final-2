import { Box, Divider } from '@mui/material'
import React from 'react'
import CardVertical from '../CardVertical/CardVertical'
import WishlistButton from '../WishlistButton/WishlistButton'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export default function WishlistDataContainer({ WishlistData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        {WishlistData.map((item, index) => (
          <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: 'center',
            }}
          >
            <CardVertical item={item} />
            <WishlistButton item={item} />
          </Box>
          <Divider/>
        </Box>
        ))}
      </Box>
      <PrimaryButton label={'Show All'} icon={''} onClick={()=>console.log('clicked')} />
    </Box>
  )
}
