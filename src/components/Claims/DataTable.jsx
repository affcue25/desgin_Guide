import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'Rep', headerName: 'Rep', width: 200},
  { field: 'ClaimStatus', headerName: 'Claim Status', width: 200 },
  {field: 'ClaimDate',headerName: 'Claim Date',width: 180, },
  { field: 'OrderNumber', headerName: 'Order Number', width: 180 },
  { field: 'StoreName', headerName: 'Store ', width: 180 },
  { field: 'HoldUntil', headerName: 'Hold Until', width: 150 },
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'Amount', headerName: 'Amount', width: 130 },
  { field: 'Escalated', headerName: 'Escalated', width: 130 },



  


  
 
];

const rows = [
  { id: 1, ClaimStatus: 'Snow', Rep: 'Jon', ClaimDate: 35 },
  { id: 2, ClaimStatus: 'Lannister', Rep: 'Cersei', ClaimDate: 42 },
  { id: 3, ClaimStatus: 'Lannister', Rep: 'Jaime', ClaimDate: 45 },
  { id: 4, ClaimStatus: 'Stark', Rep: 'Arya', ClaimDate: 16 },
  { id: 5, ClaimStatus: 'Targaryen', Rep: 'Daenerys', ClaimDate: null },
  { id: 6, ClaimStatus: 'Melisandre', Rep: null, ClaimDate: 150 },
  { id: 7, ClaimStatus: 'Clifford', Rep: 'Ferrara', ClaimDate: 44 },
  { id: 8, ClaimStatus: 'Frances', Rep: 'Rossini', ClaimDate: 36 },
  { id: 9, ClaimStatus: 'Roxie', Rep: 'Harvey', ClaimDate: 65 },
];

export default function DataTable() {
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pClaimDateSize={5}
        rowsPerPClaimDateOptions={[5]}
        
      />
    </div>
  );
}