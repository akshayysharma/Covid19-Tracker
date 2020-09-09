import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.cardHeading}
            >
              Infected
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography
              varient="body2"
              color="textSecondary"
              className={styles.cardBody}
            >
              Number of infected cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          md={3}
        >
          <CardContent className="cardContent">
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.cardHeading}
            >
              Recoverd
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography
              varient="body2"
              color="textSecondary"
              className={styles.cardBody}
            >
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent className="cardContent">
            <Typography
              color="textSecondary"
              gutterBottom
              className={styles.cardHeading}
            >
              Deaths
            </Typography>
            <Typography varient="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography
              varient="body2"
              color="textSecondary"
              className={styles.cardBody}
            >
              Number of deaths due to COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
