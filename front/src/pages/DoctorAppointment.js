import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { ListSubheader } from "@material-ui/core";

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
  listSubheader:{
    //   color: theme.palette.primary,
      fontSize: "large",
  }
}));

const appointments = [
  { day: "saturday", times: ["8:00-8:15", "8:15-8:30", "10:00-10:15"] },
  { day: "sunday", times: ["8:00-8:15", "8:15-8:30"] },
  { day: "monday", times: ["8:00-8:15", "8:15-8:30"] },
  { day: "tuesday", times: ["8:00-8:15", "8:15-8:30"] },
  { day: "wednesDay", times: ["8:00-8:15", "8:15-8:30", "8:30-8:45"] },
];

export default function DoctorAppointment() {
  const { id: doctorID } = useParams();
  console.log(doctorID);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, day, time) => {
    setSelectedIndex({ day, time });
  };
  const classes = useStyles();

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
          {appointments.map((item) => (
            <Grid item key={item.day} xs={12} sm={6} md={4} lg={3}>
              <div className={classes.root}>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListSubheader  color="primary" className={classes.listSubheader}>
                    <h2>{item.day}</h2>
                  </ListSubheader>
                  {item.times.map((time) => (
                    <ListItem
                      button
                      selected={
                        selectedIndex.day === item.day &&
                        selectedIndex.time === time
                      }
                      onClick={(event) =>
                        handleListItemClick(event, item.day, time)
                      }
                      key={item.day + time}
                    >
                      <ListItemText  primary={time} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
