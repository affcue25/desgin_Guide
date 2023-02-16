import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const PaymentEmail = () => {
    const classes = Style();

    return (
        <>
           
            <Grid container>

                <Grid item
                    xs={"none"} sm={3} md={2} lg={2} xl={2}

                >
                </Grid>
                <Grid item
                    xs={6} sm={3} md={6} lg={6} xl={6}
                >
                    <Box className={classes.margin}>
                        <div className={classes.textField}>

                            <Typography variant="h4" gutterBottom>
                                Billing Email Contact
                            </Typography>
                        </div>
                        <p className={classes.marginBottom}>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </p>
                        <div className={classes.textField}>

                            <TextField
                                required
                                id="outlined-required"
                                label="Belling Email Address"
                                defaultValue=""
                                placeholder='Billing email address'
                                size='small'
                            />
                        </div>

                    </Box>
                </Grid>
                <Grid item
                    xs={"none"} sm={3} md={4} lg={4} xl={4}

                >
                </Grid>


            </Grid>
        </>

    )
}
