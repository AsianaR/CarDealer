import React from "react";
import { useContext } from "react";
import Search from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export const WelcomeTopMenu = () => {
  
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  
  const name = (function(){
    if(user.displayName === null){
      return user.email.split('@')[0];
    }
    else{
      try{
        return user.displayName.split(' ')[0];
      }
      catch{
        return user.displayName;
      }
    }
  })();

  const avatar = (user.photoURL===null) ? null : user.photoURL; 

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-start",
        paddingY: "25px",
      }}
    >
      <Box>
        <Typography variant="h5"> Welcome, {name}!</Typography>
        <Typography variant="hint" color="#bdbdbd">
          {" "}
          This is whats happend with market
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SearchComp sx={{ color: "#383838" }}>
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
            background: "#ffffff",
            padding: "10px",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <Avatar
            alt="User" 
            src={user.photoURL} 
            sx={{ bgcolor: "gray", marginRight: "10px", width: 24, height: 24 }}
          />
          
          <Typography variant="BUTTON TEXT" color="#bdbdbd">
            {name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const SearchComp = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1.0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.5),
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
