import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { initializeApp } from "firebase/app";
import { theme } from "./MUItheme";
import { ThemeProvider } from "@mui/material/styles";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwxZX5L4sa9P5mpyfiDcGDnGlWAL_mYmo",
  authDomain: "rental-ecd69.firebaseapp.com",
  projectId: "rental-ecd69",
  storageBucket: "rental-ecd69.appspot.com",
  messagingSenderId: "175487634842",
  appId: "1:175487634842:web:54af0b7bcc36cef3507e23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
