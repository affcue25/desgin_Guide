import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const ClaimEmail = () => {
    const classes = Style();

    return (
        <>


            <Box className={classes.CenterBox}>


                <Box className={classes.margin}>
                    <Box className={classes.textField}>

                        <Typography variant="h4" gutterBottom>
                            Claims Email Contact
                        </Typography>
                    </Box>
                    <p className={classes.marginBottom}>
                        We send you emails to this address that keep you updated on important
                        customers claim updates, such as when a claim is fullfilled, how it was 
                        resolved etc.
                    </p>
                    <Box className={classes.textField}>

                        <TextField
                            required
                            id="outlined-required"
                            label="Claims Email"
                            size='small'
                        />
                    </Box>

                </Box>
            </Box>




        </>

    )
}
