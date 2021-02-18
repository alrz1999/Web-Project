import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AUTH_ACTION_TYPE, LOCAL_STORAGE, PATH } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { StoreLogOutUser } from "../reducers/store";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 0.5),
    fontFamily: ["Sahel", "Samim", "Shabnam"].join(","),
    fontSize: "large",
  },
}));

function SignButtons() {
  const classes = useStyles();
  return (
    <>
      <Link to={(location) => ({ ...location, pathname: PATH.SINGUP })}>
        <Button color="primary" variant="contained" className={classes.button}>
          ثبت‌نام
        </Button>
      </Link>

      <Link to={(location) => ({ ...location, pathname: PATH.LOGIN })}>
        <Button color="primary" variant="outlined" className={classes.button}>
          ورود
        </Button>
      </Link>
    </>
  );
}

function ExitButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        className={classes.button}
        onClick={(event) => {
          event.preventDefault();
          dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
          localStorage.removeItem(LOCAL_STORAGE.USER);
        }}
      >
        ‌خروج
      </Button>
    </>
  );
}

function PagesButtons() {
  const classes = useStyles();
  return (
    <>
      {/* TODO handle id */}
      {/* <Link to={PATH.DOCTER_APPOINTMENT + "someID"}>
        <Button variant="button" color="textPrimary" className={classes.button}>
          نوبت‌های من
        </Button>
      </Link> */}
      <Link to={PATH.DOCTORS_LIST}>
        <Button variant="button" color="primary" className={classes.button}>
          لیست پزشکان
        </Button>
      </Link>
    </>
  );
}

export default function CustomAppBar() {
  // const [logged, setLogged] = useState(false);

  const user = useSelector((state) => state.authentication.user);
  // useEffect(() => {
  //   if (user) setLogged(true);
  //   else setLogged(false);
  // }, [user]);

  return (
    <AppBar position="static" color="default" elevation={0}>
      <ReactJson src={user} />
      <Toolbar>
        <Grid container justify="flex-start">
          {user?.role ? <ExitButtons />:<SignButtons />  }
        </Grid>
        <Grid container justify="flex-end">
          <PagesButtons />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
