import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Home from './home';

function App() {
  return (
    <div>
      <Container maxW="8xl">
        <Box>
          <Home />
        </Box>
      </Container>
    </div>
  );
}

export default App;
