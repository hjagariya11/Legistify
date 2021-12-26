import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Profile from "./Profile";
import { LawyerDetails } from "./dummydata";
import { setLawyerData } from "./state/action";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("main");
  const [selectedId, setSelectedId] = useState("");
  const lawyerDetails = useSelector((state) => state.lawyerData || []);

  useEffect(() => {
    dispatch(setLawyerData(LawyerDetails));
  }, []);

  const handleClick = (id) => {
    setSelectedId(id);
    setCurrentPage("profile");
  };

  return (
    currentPage === "main" ?
      <div className="App pageContainer">
        <Box className="mainPageHeading">
          <Typography className="heading1" variant="h4">
            Welcome
          </Typography>
          <Typography className="heading2" variant="h5">
            Click on the lawyer profile to book an appointment
          </Typography>
        </Box >

        <Box className="cardSection">
          <Grid container spacing={2}>
            {lawyerDetails.length && lawyerDetails.map((data, index) => 
            <Grid item xs={6} md={4} className="lawyerCard" key = {index}>
              <Card onClick={() => handleClick(data.id)} className="card">
                <CardActionArea>
                  <CardMedia
                    style={{height: 300}}
                    component="img"
                    image={data.image}
                    title="Contemplative Reptile"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>)
              || ""}

          </Grid>
        </Box >

      </div >
      :
      <Profile setCurrentPage={setCurrentPage} selectedId={selectedId} />
  );
}

export default App;
