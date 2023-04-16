import React, { useState } from 'react';
// import Chatbot from './chatbot';
// import SearchBar from './searchBar';
import Filter from './filter/filter';
// import AddButton from './addButton';
import Map from './map';

function Home() {
  const [filter, setFilter] = useState([]);

  const renderMap = (filter.length > 0) ? <Map filter={filter} /> : null;

  return (
    <div>
      {/* <SearchBar /> */}
      <Filter setFilter={(filters) => setFilter(filters)} />
      {/* <Chatbot /> */}
      {/* <AddButton /> */}
      {renderMap}
    </div>
  );
}

export default Home;
