import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Filter from './filter';

function Home() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Chatbot />
    </div>
  );
}

export default Home;
