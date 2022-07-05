import React from 'react';
import { Box } from '@mui/system';
import { SideMenu } from '../components/SideMenu';
import { Header } from "../components/Header";
import { ProductCards } from "../components/ProductCards";
import { ColorToggleButton } from "../components/ToggleButton";
import { WelcomeTopMenu } from "../components/WelcomeTopMenu";
import { Dashboard } from '../components/Dashboard';

export const DashboardPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#f5f7f9",
        width: "100%",
        height: "100vh",
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
      <Dashboard/>
    </Box>
    </Box>
  )
}
