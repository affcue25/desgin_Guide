import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export const ClaimEmail = () => {
    return (
        <Grid container>
            <Grid item
                xs={"none"} sm={3} md={3} lg={3} xl={3}

            >
                <Button variant="text">Previous</Button>
            </Grid>
            <Grid item
                xs={6} sm={3} md={6} lg={6} xl={6}
            >
                <Box sx={{ width: "100%", height: "1000px" }}>
                    <Typography variant="h4" gutterBottom>
                        Claims Email Contact
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        size='small'
                    />
                </Box>
            </Grid>
            <Grid item
                xs={6} sm={3} md={3} lg={3} xl={3}

            >
                <div>

                    <Button variant="text">Text</Button>
                    <Button variant="text">Text</Button>
                </div>
            </Grid>


        </Grid>

    )
}
