import React from 'react';
import Button from '@material-ui/core/Button';
import {Style} from './style';

export const FileClaimButton = (props) => {
  const classes = Style();

  return (
    <Button className={classes.fileClaimButton} {...props}>
      {props.children}
    </Button>
  );
};