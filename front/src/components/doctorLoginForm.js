import React from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { logInDoctor, logInPatient } from "../utils/patient.service";
import { toastErr } from "./Toast";
import {
  AUTH_ACTION_TYPE,
  LOCAL_STORAGE,
  PATH,
  USER_ROLE,
} from "../utils/constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: ["Sahel", "Samim", "Shabnam"].join(","),
    fontSize: "large",
  },
  typography: {
    fontFamily: ["Sahel", "Samim", "Shabnam"].join(","),
  },
  rememberMe: {
    fontFamily: ["Sahel", "Samim", "Shabnam"].join(","),
  },
}));

export default function PatientLogInForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    logInDoctor(data)
      .then((res) => {
        res
          .json()
          .then((json) => {
            if (json.error) {
              toastErr(json.error);
              return;
            }
            localStorage.setItem(
              LOCAL_STORAGE.USER,
              JSON.stringify({ role: USER_ROLE.DOCTOR, token: json.token })
            );

            dispatch({
              type: AUTH_ACTION_TYPE.LOGIN_SUCCESS,
              user: { role: USER_ROLE.DOCTOR, token: json.token },
            });
            history.push(PATH.DOCTORS_LIST);
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => console.log(err.error));
  };
  return (
    <div className={classes.paper}>
      <Grid container justify="flex-end">
        <Typography component="h1" variant="h4" className={classes.typography}>
          ورود
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </Grid>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="medicalNumber"
          label="شماره‌نظام پزشکی"
          name="medicalNumber"
          autoComplete="medicalNumber"
          inputRef={register({ required: true })}
          error={errors.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="رمز عبور"
          type="password"
          id="password"
          inputRef={register({ required: true })}
          error={errors.password}
          autoComplete="current-password"
        />
        {/* <div dir="rtl">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا به خاطر بسپار"
            className={classes.rememberMe}
          />
        </div> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          ورود
        </Button>
      </form>
    </div>
  );
}
