import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { FONT_FAMILY, PATH } from "../utils/constants";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardButton: {
    fontFamily: FONT_FAMILY,
    fontSize: "large",
  },
  typography: {
    fontFamily: FONT_FAMILY,
  },
}));

export default function DoctorCard({
  name,
  description,
  imageBase64,
  doctorId,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={imageBase64 || "/static/doctor2.jpg"}
        title="doctor pic"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.typography}
        >
          <div dir="rtl">{name}</div>
        </Typography>
        <Typography className={classes.typography}>
          <div dir="rtl">{description}</div>
        </Typography>
      </CardContent>

      <CardActions>
        <Grid container justify="space-between">
          <Grid item xs={6}>
            <Link to={PATH.DOCTER_APPOINTMENT + "" + doctorId}>
              <Button
                size="small"
                color="secondary"
                fullWidth
                className={classes.cardButton}
                variant="contained"
              >
                گرفتن نوبت
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
