import * as React from 'react';
import Button  from '@mui/material/Button';
import {useTheme } from "@mui/material";

import { tokens } from "../../../theme";

export default function LogoutButton() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
  return (
      <Button sx={{ color: colors.greenAccent[600] }} variant="contained">Logout</Button>
  );
}