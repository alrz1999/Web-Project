import React from "react";
import FileInputComponent from "react-file-input-previews-base64";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { addDoctor, addPatient } from "../utils/patient.service";
import { toastErr } from "./Toast";

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
  button: {
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

export default function DoctorSignupForm() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const [image, setImage] = React.useState("");

  const onSubmit = (data) => {
    console.log(data);
    addDoctor({ ...data, image: image })
      .then((res) => {
        res
          .json()
          .then((json) => {
            if (json.error) {
              toastErr(json.error);
              return;
            }
            // TODO use token and redirect
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => console.log(err.error));
  };

  return (
    <div className={classes.paper}>
      <Grid container justify="flex-end">
        <Typography component="h1" variant="h4" className={classes.typography}>
          ثبت‌نام پزشک
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </Grid>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="نام"
          name="firstName"
          inputRef={register({ required: true })}
          error={errors.firstName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="نام خانوادگی"
          name="lastName"
          inputRef={register({ required: true })}
          error={errors.lastName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="medicalNumber"
          label="شماره‌نظام پزشکی"
          name="medicalNumber"
          inputRef={register({ required: true, pattern: /^\d*$/i })}
          error={errors.medicalNumber}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="توضیحات"
          name="description"
          inputRef={register({ required: true })}
          error={errors.description}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          inputRef={register({ required: true })}
          error={errors.email}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phoneNumber"
          label="شماره موبایل"
          name="phoneNumber"
          inputRef={register({ required: true, pattern: /^\d{10}$/i })}
          error={errors.phoneNumber}
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
          inputRef={register({ required: true, minLength: 4 })}
          error={errors.password}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="passwordRepeat"
          label="تکرار رمز عبور"
          type="password"
          id="passwordRepeat"
          inputRef={register({
            required: true,
            validate: (value) => value === watch("password"),
          })}
          error={errors.passwordRepeat}
        />
        <FileInputComponent
          labelText=""
          labelStyle={{ fontSize: 14 }}
          multiple={false}
          imagePreview={false}
          callbackFunction={(file_arr) => setImage(file_arr.base64)}
          buttonComponent={
            <Button
              color="secondary"
              variant="contained"
              component="label"
              className={classes.button}
            >
              تصویر
              <PhotoCameraIcon />
              <input type="file" hidden />
            </Button>
          }
          accept="image/*"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          ثبت‌نام
        </Button>
      </form>
    </div>
  );
}
