import React, { useContext, useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, ButtonBase } from "@mui/material";
import { Box } from "@mui/system";
import { collection, query, getDocs } from "firebase/firestore";
import { Context } from "..";


export const BlogPost = () => {
  const { db } = useContext(Context);
  const [blogData, setBlogData] = useState([]);

  
  const getBlogData = async () => {
    const q = query(collection(db, "blog"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setBlogData([...blogData, doc.data()]);
    });
  }


  useEffect(() => {
    getBlogData();
  }, [])


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
      {blogData.map((item, index) => (
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
              {item?.Headline}
            </Typography>
            <Typography variant="caption" color="#cdcdcd">
              {item?.Content}
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
                {item?.Author}
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
