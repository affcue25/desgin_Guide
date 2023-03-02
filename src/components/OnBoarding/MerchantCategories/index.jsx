import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const MerchantCategories = () => {
    const classes = Style();

    return (
        <>
            <Box className={classes.margin}>
                <Box className={classes.textField}>
                    <Typography variant="h4"
                        sx={{ fontWeight: "bold" }}
                        gutterBottom>
                        Merchant Categories
                    </Typography>
                </Box>
                <p className={classes.marginBottom}>
                    Select categories that best describe your brand to help
                    customers searching for brand and products like yours in the
                    Route App
                </p>


                <Box className={classes.textField}>


                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        Categories
                    </Typography>
                    <p className={classes.marginBottom}>
                       Select the category that best apply to your business. These will help users
                       find you in the app.
                    </p>
                    <Box className={classes.box}>

                        <FormGroup sx={{display:"block"}}>
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Home & Garden" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Babycare & Maternity" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Luggage & Bags" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Media" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Beauty & Wellness" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Pet Supplies" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Electronics" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Sports & Outdoors" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Fashion" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Food & Beverages" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Healthcare" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Vehicle parts" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="CBO & Cannabis" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Vape & Smoking Accessories" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Adult Toys & Entertainment" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Toy & Games" />
                        </FormGroup>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: "4rem" }}>
                        Gender
                    </Typography>
                    <p className={classes.marginBottom}>
                        Select the gender your business is targeting
                    </p>
                    <Box className={classes.box}>

                        <FormGroup>
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Male" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Genderless" />

                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Female" />
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Unisex" />
                        </FormGroup>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: "4rem" }}>
                        Age
                    </Typography>
                    <p className={classes.marginBottom}>
                        Select is the age your business is targeting
                    </p>
                    <Box className={classes.box}>

                        <FormGroup>
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Adult" />

                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel className={classes.checkbox} control={<Checkbox />} label="Child" />
                        </FormGroup>
                    </Box>
                </Box>
            </Box>
        </>

    )
}
