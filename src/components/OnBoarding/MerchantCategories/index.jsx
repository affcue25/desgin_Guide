import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const MerchantCategories = () => {
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
                            <Typography variant="h4"
                                sx={{ fontWeight: "bold" }}
                                gutterBottom>
                                Merchant Categories
                            </Typography>
                        </div>
                        <p className={classes.marginBottom}>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit,
                        </p>
                        

                        <div className={classes.textField}>

                            
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                Categories
                            </Typography>
                            <p className={classes.marginBottom}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, body1.
                            </p>
                            <Box className={classes.box}>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Cruelty-free-beauty" />
                                <FormControlLabel control={<Checkbox />} label="Planr-based" />
                                <FormControlLabel control={<Checkbox />} label="Female-founded" />
                                <FormControlLabel control={<Checkbox />} label="Ethically Made" />
                                <FormControlLabel control={<Checkbox />} label="Sustainable" />
                                <FormControlLabel control={<Checkbox />} label="Handmade" />
                                <FormControlLabel control={<Checkbox />} label="Brands That Give Back" />
                                <FormControlLabel control={<Checkbox />} label="Clean Beauty" />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Cruelty-free-beauty" />
                                <FormControlLabel control={<Checkbox />} label="Planr-based" />
                                <FormControlLabel control={<Checkbox />} label="Female-founded" />
                                <FormControlLabel control={<Checkbox />} label="Ethically Made" />
                                <FormControlLabel control={<Checkbox />} label="Sustainable" />
                                <FormControlLabel control={<Checkbox />} label="Handmade" />
                                <FormControlLabel control={<Checkbox />} label="Brands That Give Back" />
                                <FormControlLabel control={<Checkbox />} label="Clean Beauty" />
                            </FormGroup>
                            </Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold",marginTop:"4rem" }}>
                                Gender
                            </Typography>
                            <p className={classes.marginBottom}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, body1.
                            </p>
                            <Box className={classes.box}>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Male" />
                                <FormControlLabel control={<Checkbox />} label="Genderless" />
                              
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Female" />
                                <FormControlLabel control={<Checkbox />} label="Unisex" />
                            </FormGroup>
                            </Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold",marginTop:"4rem" }}>
                                Age
                            </Typography>
                            <p className={classes.marginBottom}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, body1.
                            </p>
                            <Box className={classes.box}>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Adult" />
                              
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Child" />
                            </FormGroup>
                            </Box>



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
