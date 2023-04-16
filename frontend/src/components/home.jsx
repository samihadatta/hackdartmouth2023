import React, { useState, useCallback } from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Filter from './filter';
import AddButton from './addButton';
import Map from './map';
import Modal from './modal';

function Home() {
  const [showAddModal, setShowAddModal] = useState(false);

  const onDoubleClick = useCallback((long, lat) => {
    console.log('hi');
    setShowAddModal(!showAddModal);
  });

  return (
    <div>
      <Modal />
      <SearchBar />
      <Filter />
      <Chatbot />
      <AddButton />
      <Map clickCallback={onDoubleClick} />
    </div>
  );
}

export default Home;
