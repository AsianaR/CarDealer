import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  Dashboard,
  Home,
  Search,
  ShoppingCart,
  AccountCircle,
  Info,
  Logout,
} from "@mui/icons-material";
import Container from "@mui/system/Container";
import { signOut } from "firebase/auth";
import { Context } from "..";

export const SideMenu = () => {
  const {auth} = useContext(Context);
  let navigate = useNavigate();
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{ paddingX: "15px", paddingY: 5 }}
    >
      <Container>
        <CardMedia
          image={logo}
          sx={{ height: 110, marginTop: "25px", width: 240 }}
          onClick={() => navigate("/")}
        />

        <Box sx={{ marginTop: 5 }}>
          <List>
            {[
              ["Dashboard", <Dashboard />],
              ["Property", <Home />],
              ["Blog", <Search />],
              ["Sell", <ShoppingCart />],
            ].map((couple, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => navigate(`/${couple[0].toLowerCase()}`)}
              >
                <ListItemButton>
                  {couple[1]}
                  <ListItemText primary={couple[0]} sx={{ marginLeft: 2 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ marginY: "15px" }} />

        <Box sx={{ marginTop: 5 }}>
          <List>
            {[
              ["Profile", <AccountCircle />],
              ["About", <Info />],
            ].map((couple, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => navigate(`/${couple[0].toLowerCase()}`)}
              >
                <ListItemButton>
                  {couple[1]}
                  <ListItemText primary={couple[0]} sx={{ marginLeft: 2 }} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem
              disablePadding
              onClick={() => signOut(auth)}
            >
              <ListItemButton>
                <Logout/>
                <ListItemText primary={"Logout"} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Drawer>
  );
};
