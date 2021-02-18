import React from "react";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DoctorCard from "../components/DoctorCard";
import { getDoctorsList } from "../utils/patient.service";
import { toastErr } from "../components/Toast";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function DoctorsList() {
  const classes = useStyles();

  const [cardss, setCards] = useState([]);

  React.useEffect(() => {
    getDoctorsList()
      .then((res) => {
        res
          .json()
          .then((json) => {
            if (json.error) {
              toastErr(json.error);
              return;
            }
            setCards(json);
            // TODO use token and redirect
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

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
          {cardss.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
              <DoctorCard
                name={card.firstName + " " + card.lastName}
                description={card.description}
                imageBase64={card.image}
                doctorId={card.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
