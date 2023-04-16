import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Filter from './filter';
import AddButton from './addButton';
import MapContainer from './map';

function Home() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Chatbot />
      <MapContainer />
      <AddButton />
    </div>
  );
}

export default Home;
