import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { theme } from "./MUItheme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";

export const Context = createContext(null);

const app = initializeApp({
  apiKey: "AIzaSyBwxZX5L4sa9P5mpyfiDcGDnGlWAL_mYmo",
  authDomain: "rental-ecd69.firebaseapp.com",
  projectId: "rental-ecd69",
  storageBucket: "rental-ecd69.appspot.com",
  messagingSenderId: "175487634842",
  appId: "1:175487634842:web:54af0b7bcc36cef3507e23",
});
const db = getFirestore(app);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Context.Provider value={{ app, db, auth }}>
          <App />
        </Context.Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
