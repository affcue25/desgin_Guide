import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const ClaimEmail = () => {
    const classes = Style();

    return (
        <>
            <Grid container>
                <Grid item
                    xs={"none"} sm={3} md={3} lg={3} xl={3}

                >
                    <Button variant="text">Previous</Button>
                </Grid>
                <Grid item
                    xs={6} sm={3} md={6} lg={6} xl={6}
                >

                </Grid>
                <Grid item
                    xs={6} sm={3} md={3} lg={3} xl={3}

                >
                    <div className={classes.SkipButton}>

                        <Button variant="text">Skip</Button>
                        <Button variant="text">Next</Button>
                    </div>
                </Grid>



            </Grid>
            <Grid container>

                <Grid item
                    xs={"none"} sm={3} md={3} lg={3} xl={3}

                >
                </Grid>
                <Grid item
                    xs={6} sm={3} md={6} lg={6} xl={6}
                >
                    <Box className={classes.margin}>
                        <div className={classes.textField}>

                            <Typography variant="h4" gutterBottom>
                                Claims Email Contact
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
                                label="Required"
                                defaultValue="Hello World"
                                size='small'
                            />
                        </div>

                    </Box>
                </Grid>
                <Grid item
                    xs={"none"} sm={3} md={3} lg={3} xl={3}

                >
                </Grid>


            </Grid>
        </>

    )
}
