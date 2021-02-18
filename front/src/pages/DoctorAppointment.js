import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { ListSubheader } from "@material-ui/core";
import { useState } from "react";
import { getAppointment } from "../utils/patient.service";
import { toastErr } from "../components/Toast";
import ConfirmDialog from "../components/ConfirDialogAppointment";
import { useSelector } from "react-redux";
import { USER_ROLE } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  listSubheader: {
    //   color: theme.palette.primary,
    fontSize: "large",
  },
}));

export default function DoctorAppointment() {
  const { id: doctorID } = useParams();
  console.log(doctorID);

  const [selectedIndex, setSelectedIndex] = React.useState({});
  const user = useSelector((state) => state.authentication.user);

  const handleListItemClick = (event, time) => {
    setSelectedIndex(time);
  };
  const classes = useStyles();

  const [times, setTimes] = useState([]);
  React.useEffect(() => {
    console.log("object");
    getAppointment({ doctorId: doctorID })
      .then((res) => {
        res
          .json()
          .then((json) => {
            if (json.error) {
              toastErr(json.error);
              return;
            }
            setTimes(json);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, [doctorID]);

  const days = ["saturday", "sunday", "monday", "tuesday", "wednesday"];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid}>
        <Grid
          container
          spacing={4}
          justify="flex-start"
          direction="row-reverse"
        >
          {days.map((day) => (
            <Grid item key={day} xs={12} sm={6} md={4} lg={3}>
              <div className={classes.root}>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListSubheader
                    color="primary"
                    className={classes.listSubheader}
                  >
                    <h2>{day}</h2>
                  </ListSubheader>
                  {times
                    .filter((time) => time.day === day)
                    .map((time) => (
                      <ListItem
                        button
                        selected={
                          selectedIndex.day === time.day &&
                          selectedIndex.time === time.time
                        }
                        onClick={(event) => handleListItemClick(event, time)}
                        key={time.day + time.time}
                      >
                        <ListItemText primary={time.time} />
                      </ListItem>
                    ))}
                </List>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          {user?.role === USER_ROLE.PATIENT ? <ConfirmDialog time={selectedIndex} /> : <></>}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
