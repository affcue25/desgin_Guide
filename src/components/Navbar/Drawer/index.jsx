import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LogoutButton from './LogoutButton';
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
    </Box>
  );

  return (
    <div>
      {[ 'Admin'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor='right'
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <h3 style={{paddingLeft:'15px'}}>Super Admin</h3>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Avatar sx={{padding:'40px' ,marginTop:"20px",marginLeft:'5px'}} sizes='large' variant='square' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

        </Grid>
        <Grid item xs={8}>
        <p> <b> Qasim</b> <br/>
            <div style={{fontSize:'12px'}}>Administrator </div><br/>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                <EmailIcon /> 
               abc123@gmail.com
            </div></p>
            <LogoutButton/>
        </Grid>
       
      </Grid>
    </Box>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}