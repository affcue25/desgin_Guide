import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Style } from "./style";


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ImporttantCard() {
    const classes=Style()
    return (
        <Card sx={{ minWidth: 275, backgroundColor: "black" }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    <span className={classes.yellowColor}>IMPORTANT: </span>
                    <span className={classes.whiteColor}>You MUST have a hero card or it will not appear in the discover feed.</span>

                </Typography>

            </CardContent>

        </Card>
    );
}