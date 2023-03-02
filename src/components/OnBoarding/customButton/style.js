import { makeStyles } from '@material-ui/core/styles';
export const Style = makeStyles((theme) => ({
  button: {
    backgroundColor: "#2196f3",
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: "#1565c0",
    },
  },
}));
