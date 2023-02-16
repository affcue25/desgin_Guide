import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const PaymentInfo = () => {
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
                                Site is free,
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                but we need payment information
                            </Typography>
                            <Typography color="success" variant="h5" gutterBottom>
                                Here is why.
                            </Typography>

                        </div>
                        <p className={classes.marginBottom}>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, 
                        </p>
                        <div className={classes.paymentButton}>
                        <Button variant="contained">Account</Button>
                        <Button variant="contained">Paypal</Button>
                        <Button variant="contained">Contained</Button>
                        </div>
                        <div className={classes.textField}>

                            <TextField
                            sx={{marginBottom:"1rem"}}
                                required
                                id="outlined-required"
                                label="Account Name"
                                defaultValue=""
                                placeholder='Account Name'
                                size='small'
                            />
                            <TextField
                            sx={{marginBottom:"1rem"}}

                                required
                                id="outlined-required"
                                label="Routing number"
                                defaultValue=""
                                placeholder='Routing'
                                size='small'
                            />
                            <TextField
                            sx={{marginBottom:"1rem"}}

                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Hello World"
                                size='small'
                            />
                            <TextField
                            sx={{marginBottom:"1rem"}}

                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Hello World"
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
