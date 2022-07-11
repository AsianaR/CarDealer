import React, {useState, useEffect, useContext} from "react";
import { Box } from "@mui/system";
import { Container, styled, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import porsche from "../assets/porsche911.jpg";

export const Dashboard = () => {
  let navigate = useNavigate();
  const { db } = useContext(Context);
  
  const [blogData, setBlogData] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  
  const getBlogData = async () => {
    const q = query(collection(db, "blog"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setBlogData([...blogData, doc.data()]);
    });
  }

  const getPropertyData = async () => {
    const q = query(collection(db, "car"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setPropertyData([...propertyData, doc.data()]);
    });
  }


  useEffect(() => {
    getBlogData();
    getPropertyData();
  }, [])

  
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
          {propertyData.map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 400,
                width: "30%",
              }}
              onClick={() => navigate(`/vehicle/${item?.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Product image"
                  image={porsche}
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {`${item?.Brand} ${item?.Model}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>


      <Typography variant="h3">Blog</Typography>
      <Box sx={{ display: "flex", justifyContent: 'space-between' , marginTop: '30px' }}>
      {blogData.map((item, index) => (
        <Box sx={{ height: "40vh", width: "30%", }} key={index}>
          <CardMedia
            component="img"
            height="200"
            image={require("../assets/headerB.jpg")}
            alt="car"
            sx={{ borderRadius: 0.75, marginBottom: "15px" }}
          />
          <Typography>
            {item?.Headline}
          </Typography>
          <Typography variant="caption" color="#cdcdcd">
            {item?.Content}
          </Typography>
        </Box>
        ))}
      </Box>
      <Box sx={{ height: '200px'}}></Box>
    </Container>
  );
};
