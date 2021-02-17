import React from "react";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { fetchBase64 } from "react-fetch-image";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DoctorCard from "../components/DoctorCard";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function DoctorsList() {
  const classes = useStyles();

  const [image64, setBackgroundSrc] = useState("");
  const [, setFetchingBackgroundSrc] = useState(true);
  const cards = [
    {
      doctorID: 0,
      name: "دکتر ۰",
      description:
        "توضات مربوط به یک پزشک در این مکان قرار می‌گیرد. او می‌تواند در این جا مقداری در مورد خود توضیح دهد",
      image: image64,
    },
    {
      doctorID: 1,
      name: "دکتر ۱",
      description: "ok",
      // image: image64,
    },
  ];

  useEffect(() => {
    fetchBase64({
      url: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
      ...{
        callback: (base64) => {
          setBackgroundSrc(base64);
          setFetchingBackgroundSrc(false);
        },
        callbackError: () => {
          setFetchingBackgroundSrc(false);
        },
      },
    });
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
          {cards.map((card) => (
            <Grid item key={card.doctorID} xs={12} sm={6} md={4} lg={3}>
              <DoctorCard
                name={card.name}
                description={card.description}
                imageBase64={card.image}
                doctorID={card.doctorID}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
