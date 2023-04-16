import React from 'react';
import {
  Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, FormControl, FormLabel, Input, ModalBody, Textarea, ModalFooter,
} from '@chakra-ui/react';
// import AddLocation from './addLocation';

function AddButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box marginTop={4}>
        <Button onClick={onOpen} colorScheme="brand">Add Location</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent m={2}>
            <ModalHeader>Add a Location</ModalHeader>
            <ModalBody>
              <Box mb={2}>
                <FormControl>
                  <FormLabel>Search for Location</FormLabel>
                  <Input />
                </FormControl>
              </Box>
              <Box mb={2}>
                <FormControl>
                  <FormLabel>Add Description</FormLabel>
                  <Textarea />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalCloseButton />
            {/* <AddLocation /> */}
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
}

export default AddButton;
