import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {useNavigate} from 'react-router-dom';
import image from "../assets/headerA.jpg";
import logo from "../assets/logo.jpg";
import { Button, ButtonBase, Typography } from "@mui/material";
import { Google, LockOutlined, MailOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

export const LoginPage = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      sx={{ width: "100vw", height: "100vh", backgroundColor: "#171719" }}
    >
      <Grid item xs={6}>
        <CardMedia
          image={image}
          sx={{ height: "100%", backgroundSize: "cover" }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <CardMedia
          image={logo}
          sx={{
            height: 100,
            width: 200,
            marginBottom: "60px",
          }}
        />
        <StyledTextField variant="filled" label="Email" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlined sx={{ color: '#f5f7f9'}}/>
            </InputAdornment>
          ),
        }}/>
        <StyledTextField variant="filled" label="Password" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockOutlined sx={{ color: '#f5f7f9'}}/>
            </InputAdornment>
          ),
        }}/>
        <StyledButton variant="contained">Login</StyledButton>
        <StyledButton variant="outlined"><Google sx={{ marginRight: 1}}/> Sign in with Google</StyledButton>

        <Box sx={{ display: 'flex', color: '#c0c0c0', position: 'absolute', bottom: 15, alignItems: 'center'}}>
          <Typography variant="body2">Don't have an account yet?</Typography>
          <ButtonBase onClick={() => navigate('/signup')}>
            <Typography variant="body1" sx={{ marginLeft: 1, color: '#f5f7f9'}}>Sign up!</Typography>
            </ButtonBase>
        </Box>
      </Grid>
    </Grid>
  );
};

const StyledTextField = styled(TextField)({
  marginBottom: "25px",
  width: '380px',

  borderBottom: '1px solid #fff',
});

const StyledButton = styled(Button)({
    marginTop: "25px",
    width: '380px',
    height: '50px'
  });
  