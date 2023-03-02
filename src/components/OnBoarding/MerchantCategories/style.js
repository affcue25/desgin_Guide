import { makeStyles } from "@mui/styles";
export const Style = makeStyles(() => ({
  margin: {
    marginTop:"5rem",
    marginBottom:"5rem",
    
  },
 
  marginBottom: {
    marginBottom:"3rem"
  },
  textField:{
    width:"100%",
display:"grid"
  },
  paymentButton: {
    marginBottom:"3rem",
    width:"70%",
    display:"flex",
    justifyContent:"space-evenly",
  },
  profileMargin:{
    marginBottom:"3rem",
    fontWeight:"bold"
  },
  box:{
    display:"flex",
    // justifyContent:"space-between",
  },
  checkbox:{
    width: 'calc((100% - 20px)/4)'
    
  }
}));
