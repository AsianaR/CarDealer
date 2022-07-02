import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import image from "../assets/headerA.jpg";
import { ButtonBase, Divider, IconButton, Typography } from "@mui/material";
import { NorthEast } from "@mui/icons-material";
import { TopMenu } from "../components/TopMenu";

export const ProductPage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#f5f7f9" }}>
        <TopMenu />
      <Grid container sx={{ height: "85%"}}>
        <Grid item xs={4} sx={{ paddingY: "50px", paddingX: "40px" }}>
          <Divider>
            <Typography variant="h6" color="#171719">
              Porsche
            </Typography>
          </Divider>
          <Box sx={{ marginY: "25px", paddingX: "20px" }}>
            <Typography variant="h4" color="#2e6ab0">
              911 Turbo S
            </Typography>
            <Typography variant="h4" color="#171719">
              - the king of speed!
            </Typography>
          </Box>
          <Divider />

          <Box>
            <Box sx={{ marginTop: "25px" }}>
              <Typography variant="body2" color="#bdbdbd">
                From:
              </Typography>
              <StyledTypography variant="h5">$1200/Day</StyledTypography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "25px",
              }}
            >
              <StyledBox>
                <Typography variant="caption" color="#bdbdbd">
                  Power
                </Typography>
                <StyledTypography variant="h5">580hp</StyledTypography>
              </StyledBox>
              <StyledBox>
                <Typography variant="caption" color="#bdbdbd">
                  Top.Speed
                </Typography>
                <StyledTypography variant="h5">300km/h</StyledTypography>
              </StyledBox>
              <StyledBox>
                <Typography variant="caption" color="#bdbdbd">
                  0 - 100km/h
                </Typography>
                <StyledTypography variant="h5">2.7s</StyledTypography>
              </StyledBox>
            </Box>
            
            <ButtonBase sx={{ marginTop: '50px' }}>
            <Typography
              color="#171719"
            >
              Discover
              <NorthEast color="secondary" />
            </Typography>
            </ButtonBase>
          </Box>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
            paddingY: "25px",
            paddingX: "30px",
          }}
        >
          <CardMedia
            image={require("../assets/porscheTop.jpg")}
            sx={{ height: "100%", width: "50%", backgroundSize: "cover" }}
          />
          <CardMedia
            image={require("../assets/porscheFront.jpg")}
            sx={{ height: "50%", width: "50%", backgroundSize: "cover" }}
          />
          <CardMedia
            image={require("../assets/porscheBack.jpg")}
            sx={{ height: "50%", width: "50%", backgroundSize: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexWrap: "wrap",
  flexDirection: "column",
});

const StyledTypography = styled(Typography)({
  marginTop: "5px",
});
