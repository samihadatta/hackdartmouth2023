import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

function MapContainer(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pins = useRef(null);
  const popups = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [newLng, setNewLng] = useState(-70.9);
  const [newLat, setNewLat] = useState(42.35);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl());
    pins.current = [new mapboxgl.Marker({
      color: '#FFFFFF',
    }).setLngLat([30.5, 50.5])];
    popups.current = [new mapboxgl.Popup({ offset: 25 }).setText(
      'Construction on the Washington Monument began in 1848.',
    )];
    pins.current.forEach((pin, i) => {
      pin.setPopup(popups.current[i]).addTo(map.current);
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('dblclick', (e) => {
      console.log('click!', e.lngLat.wrap(), e.lngLat.wrap().lng, e.lngLat.wrap().lat);
      setNewLng(e.lngLat.wrap().lng);
      setNewLat(e.lngLat.wrap().lat);
      console.log(newLng, newLat);
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapContainer;
