import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Style } from "./style";


export const PaymentInfo = () => {
    const classes = Style();

    return (
        <>
                    <Box className={classes.mainBox}>
                        <Box sx={{alignSelf:"center"}}>

                        {/* <Box className={classes.textField}>

                            <Typography variant="h4" gutterBottom>
                                Site is free,
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                but we need payment information
                            </Typography>
                            <Typography color="success" variant="h5" gutterBottom>
                                Here is why.
                            </Typography>

                        </Box> */}
                        <p className={classes.marginBottom}>
                           This will be used for any plan payments and to collect the Green Package Protection 
                           insurance premium
                        </p>
                        <p className={classes.text2}>
                            <span>
                                NOTE: Green package protection is free for you, but we will
                                still need payment information. Your customers will pay insurance
                                premium to you with their order payment.
                            </span>
                           This will be used for any plan payments and to collect the Green Package Protection 
                           insurance premium
                        </p>
                        
                        <Box className={classes.textField}>

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
                                label="Account number"
                                size='small'
                            />
                            <TextField
                            sx={{marginBottom:"1rem"}}

                                required
                                id="outlined-required"
                                label="Routing number"
                                placeholder='Routing'
                                size='small'
                            />
                            
                        </Box>
                        </Box>


                    </Box>
        </>

    )
}
