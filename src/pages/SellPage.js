import React from 'react';
import { Box } from '@mui/system';
import { SideMenu } from '../components/SideMenu';
import { WelcomeTopMenu } from "../components/WelcomeTopMenu";
import { Sell } from '../components/Sell';


export const SellPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#f5f7f9",
        width: "100%",
      }}
    >
      <SideMenu />
      <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#f5f7f9",
        marginLeft: "260px",
        paddingX: '30px',
      }}
    >
      <WelcomeTopMenu/>
      <Sell/>
    </Box>
    </Box>
  )
}
