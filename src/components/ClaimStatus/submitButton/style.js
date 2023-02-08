import { makeStyles } from "@mui/styles";
export const Style = makeStyles(() => ({
  submitButton: {
    color: "black",
    borderBottomLeftRadius: "0",
    borderTopLeftRadius: "0px",
    backgroundColor: "#3f51b5",
    "&:hover": {
      backgroundColor: "#1a237e",
    },
  },
}));
