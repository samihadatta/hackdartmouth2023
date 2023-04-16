/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
  Button,
  Select,
} from '@chakra-ui/react';

const FILTER_OPTIONS = ['bathroom', 'safesex', 'menstrual', 'community', 'clinic'];

export default function AddModal(props) {
  const {
    isOpen, onClose, newLat, newLng,
  } = props;
  const [title, setTitle] = useState('title');
  const [description, setDescription] = useState('description');
  const [category, setCategory] = useState('category');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Add a pin for the coordinates (
            {newLng}
            ,
            {' '}
            {newLat}
            ):

          </Text>
          <Text>Location Name</Text>
          <Input placeholder="Location Name" onChange={(event) => { setTitle(event.target.value); }} />
          <Text>Description</Text>
          <Input placeholder="Description" onChange={(event) => { setDescription(event.target.value); }} />
          <Text>Type of Location</Text>
          <Select>
            {FILTER_OPTIONS.map((filterOption) => {
              return <option value={filterOption} key={filterOption}>{filterOption}</option>;
            })}
            {' '}
            onChange=
            {(event) => { setCategory(event.target.value); }}
          </Select>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => { onClose(title, description, category); }}>
            Add Location
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
