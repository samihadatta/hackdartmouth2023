import React, { useState, useEffect } from 'react';
// import Chatbot from './chatbot';
// import SearchBar from './searchBar';
import { useDisclosure } from '@chakra-ui/react';
import Filter from './filter/filter';
// import AddButton from './addButton';
import Map from './map';
import Modal from './modal';

function Home() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newLng, setNewLng] = useState(0);
  const [newLat, setNewLat] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDoubleClick = (long, lat) => {
    console.log('hi');
    setShowAddModal(!showAddModal);
    setNewLng(long);
    setNewLat(lat);
    onOpen();
    console.log('newlng newlat', newLng, newLat);
  };

  const onModalClose = (title, description, type) => {
    console.log(title, description, type);
    onClose();
  };

  const [filter, setFilter] = useState([]);
  useEffect(() => {
    console.log(filter);
  });

  const renderMap = filter.length > 0 ? <Map filter={filter} clickCallback={onDoubleClick} /> : null;

  return (
    <div>
      <Modal isOpen={isOpen} onOpen={onOpen} onClose={onModalClose} newLng={newLng} newLat={newLat} />
      {/* <SearchBar /> */}
      <Filter setFilter={(filters) => setFilter(filters)} />
      {/* <Chatbot /> */}
      {/* <AddButton /> */}
      {renderMap}
    </div>
  );
}

export default Home;
