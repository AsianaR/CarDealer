import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea, Divider } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { styled } from "@mui/material/styles";
import {
  AttachMoney,
  CalendarToday,
  CreditCard,
  Speed,
  Star,
} from "@mui/icons-material";
import porsche from "../assets/porsche911.jpg";

export const ProductCards = () => {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {["1", "2", "3", "4", "1", "2", "3", "4"].map((text) => (
        <Card
          sx={{
            maxWidth: 300,
            width: "33%",
            position: "relative",
            marginBottom: "30px",
          }}
          onClick={() => navigate(`/vehicle/${'231'}`)}
        >
          <CardActionArea>
            <Box sx={{ position: "absolute", top: "5px", width: "100%" }}>
              <Button size="small" sx={{ color: "#c0c0c0" }}>
                <Star />
                4.7
              </Button>
              <Button size="small" sx={{ float: "right", color: "#c0c0c0" }}>
                <CreditCard />
              </Button>
            </Box>
            <CardMedia
              component="img"
              alt="Product image"
              maxHeight="200"
              image={porsche}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Porsche 911 Turbo S
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "20px",
                  alignItems: "baseline",
                }}
              >
                <StyledBox>
                  <Speed />
                  <StyledTypography variant="caption">580hp</StyledTypography>
                </StyledBox>
                <StyledBox>
                  <CalendarToday />
                  <StyledTypography variant="caption">2022</StyledTypography>
                </StyledBox>
                <StyledBox>
                  <AttachMoney />
                  <StyledTypography variant="caption">
                    1200/Day
                  </StyledTypography>
                </StyledBox>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  flexDirection: "column",
});

const StyledTypography = styled(Typography)({
  marginTop: "5px",
});
