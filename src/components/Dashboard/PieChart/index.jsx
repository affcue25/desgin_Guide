import React from 'react'
import Box from '@mui/material/Box';
import { MyResponsivePie } from './PieChart';
import { Card } from '@mui/material';

const PieChart = () => {
  return (
<Card sx={{width:"100%", height:"100%"}}>
    <MyResponsivePie/>
</Card>  )
}

export default PieChart