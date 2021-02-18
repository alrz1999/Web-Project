import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Hidden } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { SvgIcon } from "@material-ui/core";
import { mdiBed, mdiDoctor } from "@mdi/js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function SingPage({patientPage, doctorPage}) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid xs={false} sm={4} md={7} className={classes.image}>
        <Hidden only={["xs", "sm"]}>
          <CardMedia
            component="img"
            alt=""
            image={value === 0 ? "/static/patient.jpg" : "/static/doctor.jpg"}
          />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab
            icon={
              <SvgIcon fontSize="large">
                <path d={mdiBed} />
              </SvgIcon>
            }
            label="patient"
            aria-label="patient"
          />
          <Tab
            icon={
              <SvgIcon fontSize="large">
                <path d={mdiDoctor} />
              </SvgIcon>
            }
            label="doctor"
            aria-label="doctor"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {patientPage}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {doctorPage}
        </TabPanel>
      </Grid>
    </Grid>
  );
}
