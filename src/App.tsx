import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Home from './pages/home';
import { lans } from './utils/vars';

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {lans.title}
        </Typography>
        <Home />
      </Box>
    </Container>
  );
}

export default App;
