import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Filter from './filter';
import AddButton from './addButton';

function Home() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Chatbot />
      <AddButton />
    </div>
  );
}

export default Home;
