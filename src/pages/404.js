import { Box, Typography } from '@mui/material'
import React from 'react'

export const NotFound = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='h1' color="warning">
            404 Not found
        </Typography>
    </Box>
  )
}
