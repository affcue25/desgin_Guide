import { Box, Typography } from '@mui/material'
import React from 'react'
import { FileUpload } from './FileUpload';
import ImporttantCard from './ImportantCard';
import { Style } from "./style";


export const DiscoverFeedCard = () => {
    const classes = Style();

    return (
        <>
            <Box className={classes.box}>
                <Box>
                    <Box className={classes.textField}>

                        <Typography variant="h4" sx={{ marginBottom: "2rem" }}  className={classes.textCenter} gutterBottom>
                            Discover Feed Card
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: "1rem" }} gutterBottom>
                            Help customer find and connect with your brand. Your discover Feed
                            card will appear for customers who are interested in products and  
                            brands like yours
                        </Typography>
                    </Box>
                    <ImporttantCard />
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "2rem", marginTop: "2rem" }}>
                        Card Hero Image
                    </Typography>

                    <FileUpload />
                </Box>
            </Box>
        </>

    )
}
