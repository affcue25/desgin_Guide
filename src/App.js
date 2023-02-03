import "./App.css";
import { Box } from "@mui/material";
import { Dashboard, Navbar } from "./components";

function App() {
  return (
    <Box sx={{ backgroundColor: "#c4c4c4" }}>
      <Dashboard/>
      {/* <Navbar/> */}
    </Box>
  );
}

export default App;
