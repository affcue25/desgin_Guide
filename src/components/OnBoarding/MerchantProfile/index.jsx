import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { FileUpload } from './FileUpload';
import { Style } from "./style";


export const MerchantProfile = () => {
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
                                Merchant Profile
                            </Typography>
                        </div>
                        <p className={classes.marginBottom}>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit,
                        </p>
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "2rem" }}>
                            Profile Picture
                        </Typography>
                        <FileUpload />
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "2rem" }}>
                            Logo
                        </Typography>
                        <FileUpload />
                        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "2rem" }}>
                            Profile Info
                        </Typography>
                        <div className={classes.textField}>

                            <TextField
                                sx={{ marginBottom: "1rem" }}
                                required
                                id="outlined-required"
                                label="Store Name"
                                defaultValue=""
                                placeholder='Account Name'
                                size='small'
                            />
                            <TextField
                                sx={{ marginBottom: "1rem" }}

                                required
                                id="outlined-required"
                                label="City Name"
                                defaultValue=""
                                placeholder='Routing'
                                size='small'
                            />

                            <TextField
                                multiline
                                rows={5}
                                required
                                id="outlined-required"
                                label="Bio"
                                defaultValue=""
                                size='small'
                            />
                            <Typography variant="p"
                                sx={{ color: "gray" }}
                                gutterBottom>
                                Minimum 300 words
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "2rem" }}>
                                Merchant Causes (Recommended)
                            </Typography>
                            <p className={classes.marginBottom}>
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit,
                            </p>
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
