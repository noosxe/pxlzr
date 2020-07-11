import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ReactComponent as Logo } from '../logo.svg';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: '50px',
  },
  title: {
    fontSize: '3em',
    marginLeft: '10px',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex">
            <Logo className={classes.logo} />
            <Typography variant="h1" className={classes.title}>
              pxlzr
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
