import { makeStyles } from "@mui/styles";
export const Style = makeStyles(() => ({
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    color: "#22225C",
  },
  customButton: {
    color: "black",
    "&:hover": {
      color: "#303f9f",
    },
  },
  fileClaimButton: {
    color: "#e8eaf6",
    backgroundColor: "#3f51b5",
    "&:hover": {
      backgroundColor: "#1a237e",
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
  },
  claimStatusGrid: {
    textAlign: "center",
    marginTop: "20px",
    display: "contents",
  },
  mainGrid: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    height: "10px",
    padding: "30px",
  },
  logoGrid :{
   display:"flex"
  }
}));
