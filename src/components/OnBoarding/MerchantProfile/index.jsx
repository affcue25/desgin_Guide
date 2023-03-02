import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { FileUpload } from './FileUpload';
import { Style } from "./style";


export const MerchantProfile = () => {
    const classes = Style();

    return (
        <>




            <Box className={classes.margin}>
                <Box>

                    <Box className={classes.textField}>
                        <Typography variant="h4"
                            sx={{ fontWeight: "bold" ,textAlign: "center" }}
                            gutterBottom>
                            Merchant Profile
                        </Typography>
                    </Box>
                    <p className={classes.marginBottom}>
                        This merchant profile can be a key touchpoint for your customers. This is where they can find current orders,
                        orders history, resolve shipping issues and and discover more of your products.
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
                    <Box className={classes.textField}>

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
                            sx={{ color: "gray", marginBottom: "2.5rem" }}
                            gutterBottom>
                            Minimum 300 words
                        </Typography>

                    </Box>
                </Box>

            </Box>

        </>

    )
}
