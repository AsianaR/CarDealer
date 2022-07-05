import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button, ButtonBase, Typography } from "@mui/material";
import { Google, LockOutlined, MailOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { Context } from "../index";

import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import image from "../assets/headerA.jpg";
import logo from "../assets/logo.jpg";

export const LoginPage = () => {
  let navigate = useNavigate();
  const { auth } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);        
      });
  };

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

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
        <StyledTextField
          variant="filled"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MailOutlined sx={{ color: "#f5f7f9" }} />
              </InputAdornment>
            ),
          }}
        />
        <StyledTextField
          variant="filled"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LockOutlined sx={{ color: "#f5f7f9" }} />
              </InputAdornment>
            ),
          }}
        />
        <StyledButton variant="contained" onClick={loginWithEmail}>Login</StyledButton>
        <StyledButton variant="outlined" onClick={loginWithGoogle}>
          <Google sx={{ marginRight: 1 }} /> Sign in with Google
        </StyledButton>

        <Box
          sx={{
            display: "flex",
            color: "#c0c0c0",
            position: "absolute",
            bottom: 15,
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Don't have an account yet?</Typography>
          <ButtonBase onClick={() => navigate("/signup")}>
            <Typography
              variant="body1"
              sx={{ marginLeft: 1, color: "#f5f7f9" }}
            >
              Sign up!
            </Typography>
          </ButtonBase>
        </Box>
      </Grid>
    </Grid>
  );
};

const StyledTextField = styled(TextField)({
  marginBottom: "25px",
  width: "380px",

  borderBottom: "1px solid #fff",
});

const StyledButton = styled(Button)({
  marginTop: "25px",
  width: "380px",
  height: "50px",
});
