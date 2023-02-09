import "./App.css";
import { Box, Grid } from "@mui/material";
import { Dashboard, Navbar, SideBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Grid container>
          <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
            <SideBar/>
          </Grid>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
          <Grid item xs={6} sm={3} md={10} lg={10} xl={10}></Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
}

export default App;
