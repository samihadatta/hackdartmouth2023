import React, { useState } from 'react';
// import Chatbot from './chatbot';
// import SearchBar from './searchBar';
import Filter from './filter/filter';
// import AddButton from './addButton';
import Map from './map';

function Home() {
  const [filter, setFilter] = useState([]);
  fetch('https://api.mapbox.com/datasets/v1/annieqiu/clgjixyhi00w32aqjldij9nfw/features/?access_token=sk.eyJ1IjoiYW5uaWVxaXUiLCJhIjoiY2xnamphZXYwMTV5bTNtbnlhaWY4enZpZyJ9.9Eh5Jx-_vRkB8iCemvBsfw', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'Feature',
      properties: {
        description: 'test',
        tag: 'safesex',
        title: 'SWC',
      },
      geometry: {
        coordinates: [
          -74.28866117193388,
          43.70535599162568,
        ],
        type: 'Point',
      },
    }),
  })
    .then((response) => console.l);

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
