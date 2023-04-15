import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Filter from './filter';
import AddButton from './addButton';
import Map from './map';

function Home() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Chatbot />
      <AddButton />
      <Map />
    </div>
  );
}

export default Home;
