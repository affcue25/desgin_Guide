import { Card, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DataTable from './DataTable';


export const Claims = () => {
    const [dateFrom, setDateFrom] = useState('');

    const handleDateFrom = (event) => {
      setDateFrom(event.target.value)
    };
    const [dateTo, setDateTo] = useState('');
  
    const handleDateTo = (event) => {
      setDateTo(event.target.value);
    };
    const [claim, setClaim] = useState('today');

    const handleClaimChange =(event) => {
      setClaim(event.target.value);
    };
    const [reorder, setReorder] = useState('today');

    const handleReorderChange = (event) => {
      setReorder(event.target.value);
    };

    const [rep, setRep] = useState('today');

    const handleRepChange = (event) => {
      setRep(event.target.value);
    };

    const [store, setStore] = useState('today');

    const handleStoreChange = (event) => {
      setStore(event.target.value);
    };
    const [escalated, setEscalated] = useState('today');

    const handleEscalatedChange = (event) => {
      setEscalated(event.target.value);
    };
  
  return (
<Box> 
    <Card sx={{padding:"25px", bgcolor:"#F4F6F9"}}>
    <Card sx={{padding:"15px"}}>
        <h3>Claims</h3>
        <h5>Showing All Claims</h5>
    <Grid container spacing={2}>

  <Grid item xs={4} sm={4} md={4} lg={4} xl={ 4}>
    <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Claim Date:</Typography>
  <TextField
  size='small'
        id="date"
        label="From"
        type="date"
        defaultValue={dateFrom}
        onChange={handleDateFrom}
        sx={{ width: 220 ,Padding:"25px"}}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        size='small'

        id="date"
        label="To"
        type="date"
        defaultValue={dateTo}
        onChange={handleDateTo}
        sx={{ width: 220 ,height:"35px"}}
        InputLabelProps={{
          shrink: true,
        }}
      />
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
  <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Claim Status:</Typography>

  <Select
  sx={{height:"35px"}}
    value={claim}
    onChange={handleClaimChange}
    fullWidth
  >
    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"New"}>New</MenuItem>
    <MenuItem value={"Prossing"}>Prossing</MenuItem>
    <MenuItem value={"Closed:Approved"}>Closed:Approved</MenuItem>
    <MenuItem value={"Closed:Denied"}>Closed:Denied</MenuItem>


  </Select>
    
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
  <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Re-Order Status:</Typography>

  <Select
   sx={{height:"35px"}}
    value={reorder}
    onChange={handleReorderChange}
    fullWidth
  >
    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"NotStarted"}>NotStarted</MenuItem>
    <MenuItem value={"ReOrdered"}>Re Ordered</MenuItem>
    <MenuItem value={"TK#Sent"}>TK#Sent</MenuItem>
    <MenuItem value={"Problem"}>Problem</MenuItem>
    <MenuItem value={"Delivered"}>Delivered</MenuItem>



  </Select>
  </Grid>
</Grid>
    
   
    <Grid container spacing={2}>

  <Grid item xs={4} sm={4} md={4} lg={4} xl={ 4}>
  <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Rep:</Typography>

  <Select
    sx={{height:"35px"}}
    value={rep}
    onChange={handleRepChange}
    fullWidth
  >
    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"New"}>New</MenuItem>
    <MenuItem value={"Prossing"}>Prossing</MenuItem>
    <MenuItem value={"Closed:Approved"}>Closed:Approved</MenuItem>
    <MenuItem value={"Closed:Denied"}>Closed:Denied</MenuItem>


  </Select>
   
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
  <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Store:</Typography>

  <Select
    sx={{height:"35px"}}
    value={store}
    onChange={handleStoreChange}
    fullWidth
  >
    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"New"}>New</MenuItem>
    <MenuItem value={"Prossing"}>Prossing</MenuItem>
    <MenuItem value={"Closed:Approved"}>Closed:Approved</MenuItem>
    <MenuItem value={"Closed:Denied"}>Closed:Denied</MenuItem>


  </Select>
    
  </Grid>
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
  <Typography sx={{paddingBottom:"15px",paddingTop:"15px"}}> Escalated:</Typography>

  <Select
    sx={{height:"35px"}}
    value={escalated}
    onChange={handleEscalatedChange}
    fullWidth
  >
    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"NotStarted"}>NotStarted</MenuItem>
    <MenuItem value={"ReOrdered"}>Re Ordered</MenuItem>
    <MenuItem value={"TK#Sent"}>TK#Sent</MenuItem>
    <MenuItem value={"Problem"}>Problem</MenuItem>
    <MenuItem value={"Delivered"}>Delivered</MenuItem>



  </Select>
  </Grid>
</Grid>



{/* //c */}
<Grid container spacing={2}>

<Grid  item xs={4} sm={4} md={4} lg={4} xl={ 4}>
  <div style={{padding:"15px"}}>
<Button sx={{margin:"15px"}} variant="contained" color="success">
        Search
      </Button>
      <Button variant="contained" color="grey">
        Reset
      </Button>
      </div>
</Grid>
<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>

  
</Grid>
<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>

</Grid>
</Grid>
<DataTable/>
</Card>
    </Card>

</Box>  )
} 
