import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import "./App.css";
import Appointment from "./appointment/appointment";

const Profile = (props) => {
  const lawyerDetails = useSelector((state) => state.lawyerData || []);
  const selected = lawyerDetails?.filter(
    (data) => data.id === props.selectedId
  );
  const selectedLawyer = selected[0] || {};
  const [makeAppointment, updateApp] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  const bookAppointment = (user) => {
    //book appointment code goes here
    setSelectedUser(user)
    updateApp(true);
  };

  const getBack = () => {
    updateApp(false);
  };

  const goBack = () => {
    props.setCurrentPage("main");
  };

  if (!Object.keys(selectedLawyer).length) {
    return null;
  }

  return (
    <div className="pageContainer">
      {makeAppointment ? (
        <Appointment getBack={() => getBack()} selectedId={props.selectedId} selectedUser={selectedUser}/>
      ) : (
        <>
          <Box className="mainPageHeading">
            <Typography className="heading2" variant="h5">
              {selectedLawyer.name}
            </Typography>
          </Box>

          <Box className="cardSection">
            <Grid container spacing={2}>
              {selectedLawyer?.empList?.map((data, index) => (
                <Grid item xs={6} md={4} className="lawyerCard" key={index}>
                  <Card onClick={() => bookAppointment(data)} className="card">
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 300 }}
                        component="img"
                        image={data.image}
                        title="lawyer"
                      />
                      <CardContent>
                      <Grid item xs={12} md={12} className="profileItem">
                          Name : {data?.name?.toUpperCase()}
                        </Grid>
                        <Grid item xs={12} md={12} className="profileItem">
                          Availability: {data.availability}
                        </Grid>
                        <Grid item xs={12} md={12} className="profileItem">
                          Speciality: {data.speciality}
                        </Grid>
                        <Grid item xs={12} md={12} className="profileItem">
                          Appointment Charge : INR {data.appointmentCost}
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )) || ""}
            </Grid>
          </Box>
          <Box className="footer">
            <Box className="footerContent">
              <Button
                variant="contained"
                onClick={bookAppointment}
                className="button1"
              >
                Book an appointment
              </Button>
              <Button variant="outlined" onClick={goBack}>
                Back to dashboard
              </Button>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default Profile;
