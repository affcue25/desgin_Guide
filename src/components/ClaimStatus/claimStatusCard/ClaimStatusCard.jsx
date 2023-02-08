import { Grid, TextField } from "@mui/material";
import React from "react";
import { Style } from "./style";
import { SubmitButton } from "../submitButton/SubmitButton";

export const ClaimStatusCard = () => {
  const classes = Style();
  return (
    <Grid container 
    className={classes.mainGrid}
    >
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
      <Grid
        className={classes.claimStatusGrid}
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
      >
        <div>
          <h1>Claim Status</h1>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Code"
              variant="outlined"
              size="small"
              sx={{borderTopRightRadius:"0px"}}
            />
            <SubmitButton >sumbit</SubmitButton>
          </form>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
    </Grid>
  );
};
