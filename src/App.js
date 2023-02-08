import "./App.css";
import { Box } from "@mui/material";
import { ClaimStatus, Dashboard, Navbar } from "./components";

function App() {
  return (
    <Box 
    // sx={{ backgroundColor: "#F3F6F9" }}
    >
       {/* <Navbar/> */}

      {/* <Dashboard/> */}
      <ClaimStatus/>
    </Box>
  );
}

export default App;
