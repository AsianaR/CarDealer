import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export const BlogPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingBottom: 5,
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "25px",
      }}
    >
      {[1, 2, 3, 4].map((item, index) => (
        <Box
          sx={{
            width: "100%",
            marginBottom: "80px",
            backgroundColor: "#f5f7f9",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            
          }}
          key={index}
        >
          <CardMedia
            component="img"
            height="250"
            image={require("../assets/headerB.jpg")}
            alt="car"
            sx={{ borderRadius: 2 }}
          />
          <Box sx={{ marginLeft: "40px", paddingTop: "10px" }}>
            <Typography variant="h5">
              Powerful electrifying performance, engineered to meet every
              challenge.
            </Typography>
            <Typography variant="caption" color="#cdcdcd">
              Elit enim dolore veniam qui duis ut non ad reprehenderit nulla
              laboris incididunt consequat laborum. Anim occaecat nostrud sunt
              ad laborum proident pariatur id eu duis nulla aliquip.
              Exercitation nulla non aute eiusmod esse pariatur ut deserunt
              pariatur.
            </Typography>
            <ButtonBase variant="outline" sx={{ width: "100px" }}>
              Read more
            </ButtonBase>
            <Box
              sx={{
                display: "flex",
                background: "#3b3a3b",
                padding: "10px",
                alignItems: "center",
                borderRadius: 1.2,
                justifyContent: "flex-end",
                width: "90%",
                marginTop: "25px",
              }}
            >
              <Typography variant="BUTTON TEXT" color="#bdbdbd">
                {" "}
                Enzo
              </Typography>

              <Avatar
                alt="User"
                src={require("../assets/avatar.jpg")}
                sx={{
                  bgcolor: "gray",
                  marginLeft: "10px",
                  width: 24,
                  height: 24,
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
