import "./App.css";
import { Box, Card, Grid } from "@mui/material";
import { Claims, ClaimStatus, CreateAccount, Dashboard, Navbar, OnBoarding, SideBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Box sx={{backgroundColor:"#fafafa"}}>
        {/* <CreateAccount */}
        <Dashboard />
        {/* <Navbar />
        <Grid container
         sx={{ backgroundColor: "#F4F6F9" }}
         >
          <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
            <SideBar />
          </Grid>

          <Grid item xs={6} sm={3} md={10} lg={10} xl={10}>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/ClaimStatus" exact element={<ClaimStatus />} />
              <Route path="/Claims" exact element={<Claims />} />

            </Routes> */}
      {/* </Grid> */}
    {/* </Grid> */}

      </Box >

    </BrowserRouter >
  );
}

export default App;
