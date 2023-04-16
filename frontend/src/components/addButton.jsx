import React from 'react';
import {
  Box, Button,
} from '@chakra-ui/react';

function AddButton() {
  return (
    <div>
      <Box m={4}>
        <Button colorScheme="blue">Add Location</Button>
      </Box>
    </div>
  );
}

export default AddButton;
