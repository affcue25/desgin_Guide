import { Grid } from "@material-ui/core";
import React from "react";
import { Form } from "./Form/Form";
import { SignupBanner } from "./SignupBanner/SignupBanner";

export const CreateAccount = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={2} md={6} lg={6} xl={6}>
          <SignupBanner />
        </Grid>
        <Grid item xs={6} sm={2} md={6} lg={6} xl={6}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
};
