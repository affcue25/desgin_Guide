import { Grid } from "@mui/material";
import React from "react";
import { Navbar } from "../Navbar";

export const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={6} sm={3} md={3} lg={2} xl={2}>
        osama
      </Grid>
      <Grid item xs={6} sm={9} md={9} lg={10} xl={10}>
       <Navbar/>
      </Grid>
    </Grid>
  );
};
