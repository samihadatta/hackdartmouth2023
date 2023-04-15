import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss';

console.log('HERE', import.meta.env.VITE_MAPBOX_API_KEY);

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

function MapContainer(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });
    // map.on('load', () => {
    //   map.addSource('earthquakes', {
    //     type: 'geojson',
    //     // Use a URL for the value for the `data` property.
    //     data: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
    //   });

    //   map.addLayer({
    //     id: 'earthquakes-layer',
    //     type: 'circle',
    //     source: 'earthquakes',
    //     paint: {
    //       'circle-radius': 4,
    //       'circle-stroke-width': 2,
    //       'circle-color': 'red',
    //       'circle-stroke-color': 'white',
    //     },
    //   });
    // });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapContainer;
