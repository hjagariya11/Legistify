import React from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import { resourcesData } from "./data.js";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const currentDate = new Date(2020, 10, 25);
const views = ["day", "week", "month"];

const Appointment = (props) => {
 
  const goBack = () => {
    props.getBack();
  };

    return (
      <>
      <div>
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={props?.selectedUser?.appointment}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          startDayHour={9}
          height={600}
        >
          <Resource
            dataSource={resourcesData}
            fieldExpr="roomId"
            label="Room"
          />
        </Scheduler>
        </div>

        <Box className="footer">
          <Box className="footerContent">
            <Button variant="outlined" onClick={goBack}>
              Back to profile
            </Button>
          </Box>
        </Box>

      </>

    );
  }

export default Appointment;
