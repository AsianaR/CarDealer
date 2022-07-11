import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea, Divider } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { styled } from "@mui/material/styles";
import {
  AttachMoney,
  CalendarToday,
  CreditCard,
  Speed,
  Star,
} from "@mui/icons-material";
import { Context } from "..";
import porsche from "../assets/porsche911.jpg";

export const ProductCards = () => {
  let navigate = useNavigate();
  const {db} = useContext(Context);

  const [propertyData, setPropertyData] = useState([]);
  
  const getPropertyData = async () => {
    const q = query(collection(db, "car"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setPropertyData([...propertyData, doc.data()]);
    });
  }

  useEffect(() => {
    getPropertyData();
  }, [])


  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {propertyData.map((item, index) => (
        <Card
          sx={{
            maxWidth: 300,
            width: "33%",
            position: "relative",
            marginBottom: "30px",
          }}
          key={index}
          onClick={() => navigate(`/vehicle/${item?.id}`)}
        >
          <CardActionArea>
            <Box sx={{ position: "absolute", top: "5px", width: "100%" }}>
              <Button size="small" sx={{ color: "#c0c0c0" }}>
                <Star />
                {item?.Rating}
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
                {`${item?.Brand} ${item?.Model}`}
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
                  <StyledTypography variant="caption">{item?.Hp}hp</StyledTypography>
                </StyledBox>
                <StyledBox>
                  <CalendarToday />
                  <StyledTypography variant="caption">{item?.Release}</StyledTypography>
                </StyledBox>
                <StyledBox>
                  <AttachMoney />
                  <StyledTypography variant="caption">
                    {item?.Price}/Day
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
