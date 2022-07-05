import React from "react";
import { Box } from "@mui/system";
import { Container, styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import porsche from "../assets/porsche911.jpg";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <Container sx={{ display: "flex", flexDirection: "column", paddingBottom: '50px' }}>
    <Typography variant="h3">Property</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: 'wrap',
          marginTop: '30px',
          marginBottom: '80px'
        }}
      >
          {[1, 2, 3].map((item, index) => (
            <Card
              sx={{
                maxWidth: 400,
                width: "30%",
              }}
              onClick={() => navigate(`/vehicle/${"231"}`)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Product image"
                  maxHeight="300"
                  image={porsche}
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    Porsche 911 Turbo S
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>


      <Typography variant="h3">Blog</Typography>
      <Box sx={{ display: "flex", justifyContent: 'space-between' , marginTop: '30px' }}>
      {[1, 2, 3].map((item, index) => (
        <Box sx={{ height: "40vh", width: "30%", }}>
          <CardMedia
            component="img"
            height="200"
            image={require("../assets/headerB.jpg")}
            alt="car"
            sx={{ borderRadius: 0.75, marginBottom: "15px" }}
          />
          <Typography>
            Powerful electrifying performance, engineered to meet every
            challenge.
          </Typography>
          <Typography variant="caption" color="#cdcdcd">
            Elit enim dolore veniam qui duis ut non ad reprehenderit nulla
            laboris incididunt consequat laborum. Anim occaecat nostrud sunt ad
            laborum proident pariatur id eu duis nulla aliquip. Exercitation
            nulla non aute eiusmod esse pariatur ut deserunt pariatur.
          </Typography>
        </Box>
        ))}
      </Box>
      <Box sx={{ height: '200px'}}></Box>
    </Container>
  );
};
