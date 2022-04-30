import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Home from './pages/home';

const App = () => {

  console.log('app is calling');
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dynamic Form
        </Typography>
        <Home />
      </Box>
    </Container>
  );
}

export default App;
