import { Box, Typography } from "@mui/material";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import header from "../assets/background.jpg";

export const Header = () => {
  return (
    <Box sx={{ width: "100%", height: "120px" }}>
      <CardMedia
        image={header}
        sx={{ height: "100%", borderRadius: 2, backgroundSize: "cover" }}
      />
    </Box>
  );
};
