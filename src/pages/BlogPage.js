import React from "react";
import { Box } from "@mui/system";
import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { WelcomeTopMenu } from "../components/WelcomeTopMenu";
import { BlogPost } from "../components/BlogPost";

export const BlogPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#f5f7f9",
        width: "100%",
        height: '100%',
        minHeight: "100vh",
      }}
    >
      <SideMenu />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#f5f7f9",
          marginLeft: "260px",
          paddingX: "30px",
        }}
      >
        <WelcomeTopMenu />
        <Header />
        <BlogPost />
      </Box>
    </Box>
  );
};
