import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

function MapContainer(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pins = useRef(null);
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
    pins.current = [new mapboxgl.Marker({
      color: '#FFFFFF',
    //   draggable: true,
    }).setLngLat([30.5, 50.5])];
    pins.current.forEach((pin) => {
      pin.addTo(map.current);
    });
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
