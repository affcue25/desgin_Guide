import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { FileUpload } from './FileUpload';
import ImporttantCard from './ImportantCard';
import { Style } from "./style";


export const DiscoverFeedCard = () => {
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

                            <Typography variant="h4" sx={{ marginBottom: "2rem" }} gutterBottom>
                                Discover Feed Card
                            </Typography>
                            <Typography variant="body2" sx={{marginBottom:"1rem"}} gutterBottom>
                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </div>
                        <ImporttantCard />
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "2rem", marginTop: "2rem" }}>
                            Card Hero Image
                        </Typography>
                        <FileUpload />

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
