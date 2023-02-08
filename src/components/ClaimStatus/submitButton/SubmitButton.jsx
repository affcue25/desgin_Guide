import React from 'react';
import Button from '@material-ui/core/Button';
import {Style} from './style';

export const SubmitButton = (props) => {
  const classes = Style();

  return (
    <Button className={classes.submitButton} {...props}>
      {props.children}
    </Button>
  );
};