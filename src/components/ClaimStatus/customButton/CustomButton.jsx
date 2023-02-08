import React from 'react';
import Button from '@material-ui/core/Button';
import {Style} from './style';

export const CustomButton = (props) => {
  const classes = Style();

  return (
    <Button className={classes.customButton} {...props}>
      {props.children}
    </Button>
  );
};