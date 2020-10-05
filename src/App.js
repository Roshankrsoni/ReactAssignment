import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Main from './Main';
import './App.css'
import Header from './Header';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: '11%'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://roshankrsoni.github.io" target='_blank'>
        Roshan Kr Soni
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
    <Header />
    <Container maxWidth="md">
      <Box my={4}>
        <Main />
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
