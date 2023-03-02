import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const PaymentEmail = () => {
    const classes = Style();

    return (
        <>
            <Box className={classes.margin}>
                <Box>

                    

                        <Typography variant="h4" gutterBottom>
                            Payment Email
                        </Typography>
                    <p className={classes.marginBottom}>
                        This is how we will send invoices and important Email billing information to you.
                    </p>
                    <Box className={classes.textField}>

                        <TextField
                            required
                            id="outlined-required"
                            label="Billing Email Address"
                            defaultValue=""
                            placeholder='Billing email address'
                            size='small'
                        />
                    </Box>
                </Box>

            </Box>


        </>

    )
}
