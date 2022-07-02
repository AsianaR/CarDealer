import React from "react";
import Search from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom';
import { CardMedia } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import logo from '../assets/logo.jpg';

export const TopMenu = () => {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start",
        paddingX: '30px',
        paddingY: '20px',
        background: '#191819',
      }}
    >
      <Box>
      <CardMedia
          image={logo}
          sx={{ height: "36px", width: '64px', backgroundSize: "cover" }}
          onClick={() => navigate('/')}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SearchComp sx={{ color: "#bdbdbd" }}>
          <SearchIconWrapper>
            <Search sx={{ color: "#bdbdbd" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchComp>
        <Box
          sx={{
            display: "flex",
            background: "#3b3a3b",
            padding: "10px",
            alignItems: "center",
            borderRadius: 1.2,
          }}
        >
          <Avatar
            alt="User" 
            src={require("../assets/avatar.jpg")} 
            sx={{ bgcolor: "gray", marginRight: "10px", width: 24, height: 24 }}
          />
          
          <Typography variant="BUTTON TEXT" color="#bdbdbd">
            {" "}
            Enzo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const SearchComp = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
