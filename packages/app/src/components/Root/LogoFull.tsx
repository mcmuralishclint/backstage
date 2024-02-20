import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyLogo from './logo.jpg'

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  return <img src={MyLogo} />
};

export default LogoFull;
