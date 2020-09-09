import React from "react";
import { Typography, Link } from "@material-ui/core";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Typography>
        Realtime data from credible sources linked on my
        <Link
          href="https://github.com/akshayysharma/Covid19-Tracker"
          target="_blank"
          className={styles.githubLink}
        >
          GITHUB
        </Link>
        . Numbers might take time to reflect on website.
      </Typography>
    </div>
  );
}
