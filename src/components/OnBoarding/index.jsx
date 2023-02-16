import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ProgressBar } from './ProgressBar';
import { Button, Grid } from '@mui/material';
import { Style } from "./style";
import { StepperRole } from './Stepper';
import AppBar from "@mui/material/AppBar";
import { ClaimEmail } from './ClaimEmail';
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { PaymentInfo } from './PaymentInfo';
import { useState } from 'react';
import { PaymentEmail } from './PaymentEmail';
import { SuccessScreen } from './Success';


const drawerWidth = 240;

export const OnBoarding = () => {
    const [stepperValue, setStepperValue] = useState(0)

    const previousButton = () => {
        if (stepperValue > 0) {
            setStepperValue((value) => value - 1);
        }
        else {
            return
        }
    }
    const nextButton = () => {
        if (stepperValue < 3) {
            setStepperValue((value) => value + 1);
        }
        else {
            return
        }
    }
    const skipButton = () => {
        if (stepperValue < 3) {
            setStepperValue((value) => value + 1);
        }
        else {
            return
        }
    }

    const listvalue = [
        { name: "Dashboard", icon: <HomeIcon /> },
        { name: "Claim", icon: <AutorenewIcon /> },
        { name: "Logout", icon: <ExitToAppIcon /> },
    ];

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ProgressBar stepperValue={stepperValue} />
                {listvalue.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );
    const classes = Style();

    return (
        <>
            <Grid container
                sx={{ backgroundColor: "#F4F6F9" }}
            >
                <Grid item xs={6} sm={2} md={3} lg={3} xl={3}>
                    <Box sx={{ display: "flex" }}>
                        <CssBaseline />
                        <AppBar
                            position="fixed"
                            sx={{
                                width: { sm: `calc(100% - ${drawerWidth}px)` },
                                ml: { sm: `${drawerWidth}px` },
                            }}
                        ></AppBar>
                        <Box
                            component="nav"
                            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                            aria-label="mailbox folders"
                        >
                            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                            <Drawer
                                variant="permanent"
                                sx={{
                                    display: { xs: "none", sm: "block" },
                                    "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: "16%",
                                    },
                                }}
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={6} sm={3} md={9} lg={9} xl={9}>
                    <Grid container>
                        <Grid item
                            xs={"none"} sm={3} md={3} lg={3} xl={3}

                        >
                            <Button onClick={previousButton} variant="text">Previous</Button>
                        </Grid>
                        <Grid item
                            xs={6} sm={3} md={6} lg={6} xl={6}
                        >

                        </Grid>
                        <Grid item
                            xs={6} sm={3} md={3} lg={3} xl={3}

                        >
                            <div className={classes.SkipButton}>

                                <Button onClick={skipButton} variant="text">Skip</Button>
                                <Button onClick={nextButton} variant="text">Next</Button>
                            </div>
                        </Grid>



                    </Grid>
                    {stepperValue === 0 && <ClaimEmail />}
                    {stepperValue === 1 && <PaymentInfo />}
                    {stepperValue === 2 && <PaymentEmail />}
                    {stepperValue === 3 && <SuccessScreen/>}
                    <StepperRole stepperValue={stepperValue} />
                </Grid>
            </Grid>
        </>


    );
}
