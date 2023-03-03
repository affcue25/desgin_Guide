import { Box, Card, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Style } from "./style";
import ErrorIcon from '@mui/icons-material/Error';


export const Protection = () => {
    const [checked, setChecked] = useState(true);
    const classes = Style();
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Box className={classes.margin}>
                <Box>



                    <Typography variant="h4" gutterBottom>
                        Protection Implementation
                    </Typography>
                    <p className={classes.marginBottom}>
                        For protection to work, it needs to be implemented on your website by inserting a code snippet.
                        It will appear in your cart for your customers to select.
                    </p>
                    <Card className={classes.card}>
                        <Box className={classes.textJustify}>

                            <p className={classes.marginZero}>Shipping Protection
                                <ErrorIcon sx={{ marginBottom: "-.4rem" }} />
                            </p>
                            <p className={classes.colorgray}>
                                Instant resolve shipping issues
                            </p>
                        </Box>
                        <Box>

                            <p className={classes.charges}>$0.98
                            </p>
                            <p className={classes.marginZero}>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    default />
                            </p>
                        </Box>
                    </Card>
                </Box>

            </Box>


        </>

    )
}
