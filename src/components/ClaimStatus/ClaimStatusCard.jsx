import { Button } from "@material-ui/core";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { Style } from "./style";
import {FileClaimButton} from "./FileClaimButton"

export const ClaimStatusCard = () => {
  const classes = Style();
  return (
    <Grid container className={classes.mainGrid}>
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
              sx={{ height: "10px" }}
              className={classes.textField}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
            <FileClaimButton >sumbit</FileClaimButton>
          </form>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
    </Grid>
  );
};
