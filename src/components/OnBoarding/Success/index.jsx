import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '88vh',
  },
  icon: {
    fontSize: '5rem',
    color: theme.palette.success.main,
    marginBottom: theme.spacing(2),
  },
  message: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
  },
}));

export const SuccessScreen =()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckCircleIcon className={classes.icon} />
      <Typography className={classes.message}>You have successfully registered!</Typography>
    </div>
  );
}

