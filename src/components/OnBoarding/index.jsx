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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ProgressBar } from './ProgressBar';
import { Grid } from '@mui/material';
import { Style } from "./style";
import { StepperRole } from './Stepper';
import { ClaimEmail } from './ClaimEmail';


const drawerWidth = 240;

export const OnBoarding = () => {
    const classes = Style();

    return (
        <>
            <Grid container
                sx={{ backgroundColor: "#F4F6F9" }}
            >
                <Grid item xs={6} sm={2} md={3} lg={2} xl={2}>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />

                        <Drawer
                            sx={{
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                },
                            }}
                            variant="permanent"
                            anchor="left"
                        >
                            <Toolbar />
                            <Divider />
                            <List>
                                <p className={classes.margin}>Onboarding</p>
                                <ProgressBar />
                                <p className={classes.margin}>2/9  tasks are complete</p>

                                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                            <List>
                                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>

                    </Box>
                </Grid>

                <Grid item xs={6} sm={3} md={9} lg={10} xl={10}>
                    <ClaimEmail />
                    <StepperRole />
                </Grid>
            </Grid>
        </>


    );
}