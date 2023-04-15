import React from 'react';
import {
  Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
} from '@chakra-ui/react';
// import AddLocation from './addLocation';

function AddButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box marginTop={4}>
        <Button onClick={onOpen} colorScheme="blue">Add Location</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Location</ModalHeader>
            <ModalCloseButton />
            {/* <AddLocation /> */}
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}

export default AddButton;
