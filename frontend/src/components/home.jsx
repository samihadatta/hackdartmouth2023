import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';

function Home() {
  return (
    <div>
      <SearchBar />
      <Chatbot />
    </div>
  );
}

export default Home;
