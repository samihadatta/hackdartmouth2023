import React from 'react';
import Chatbot from './chatbot';
import SearchBar from './searchBar';
import Map from './map';

function Home() {
  return (
    <div>
      <SearchBar />
      <Chatbot />
      <Map />
    </div>
  );
}

export default Home;
