import { Grid } from "@mui/material";
import { Style } from "./style";
import React from "react";

export const Dashboard = () => {
  const classes = Style();

  return (
    <Grid container>
      <Grid item xs={6} sm={3} md={3} lg={2} xl={2}>
        osama
      </Grid>
      <Grid item xs={6} sm={9} md={9} lg={10} xl={10}>
        <h5 className={classes.title}>Dashboard</h5>
      </Grid>
    </Grid>
  );
};
