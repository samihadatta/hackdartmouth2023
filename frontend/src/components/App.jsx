import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Home from './home';

function App() {
  return (
    <div>
      <Container maxW="7xl" p="12">
        <Box>
          <Home />
        </Box>
      </Container>
    </div>
  );
}

export default App;
