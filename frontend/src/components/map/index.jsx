import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

const colors = {
  bathroom: '#B97BCE', safesex: '#C57288', menstrual: '#8272C5', community: '#72C5B1', clinics: '#88C572',
};

// will need to get dataObj from API
// eslint-disable-next-line max-len
const data = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"description":"there are pads and tampons in first floor bathroom","tag":"menstrual"},"geometry":{"coordinates":[-72.29477886598248,43.70457068113811],"type":"Point"},"id":0},{"type":"Feature","properties":{"description":"there are condoms free for grabs","tag":"safesex"},"geometry":{"coordinates":[-72.29097810842507,43.70455069849166],"type":"Point"},"id":1},{"type":"Feature","properties":{"description":"gender neutral bathroom on second floor","tag":"bathrooms"},"geometry":{"coordinates":[-72.29063105823391,43.70316583207975],"type":"Point"},"id":2},{"type":"Feature","properties":{"description":"pads and tampons in bathroom","tag":"menstrual"},"geometry":{"coordinates":[-72.29459482602407,43.703738064222506],"type":"Point"},"id":3}]}';
const dataObj = JSON.parse(data);
console.log(dataObj);

function MapContainer(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pins = useRef(null);
  const popups = useRef(null);
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
    map.current.on('load', () => {
      map.current.addSource('source_id', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });
      const geojsonSource = map.current.getSource('source_id');
      geojsonSource.setData(dataObj);
      // map.current.addLayer({
      //   id: 'source_id',
      //   type: 'symbol',
      //   source: 'source_id',
      //   layout: {
      //     'icon-image': 'custom-marker',
      //     // get the title name from the source's "title" property
      //     // 'text-field': ['get', 'description'],
      //     'text-font': [
      //       'Open Sans Semibold',
      //       'Arial Unicode MS Bold',
      //     ],
      //     'text-offset': [0, 1.25],
      //     'text-anchor': 'top',
      //   },
      // });
      pins.current = [];
      popups.current = [];
      dataObj.features.forEach((feature) => {
        pins.current.push(
          new mapboxgl.Marker({
            color: colors[feature.properties.tag],
          }).setLngLat([feature.geometry.coordinates[0], feature.geometry.coordinates[1]]),
        );

        popups.current.push(
          new mapboxgl.Popup({ offset: 25 }).setText(feature.properties.description),
        );

        pins.current[pins.current.length - 1].setPopup(popups.current[popups.current.length - 1]).addTo(map.current);
      });
      // pins.current = [new mapboxgl.Marker({
      //   color: '#FFFFFF',
      //   //   draggable: true,
      // }).setLngLat([30.5, 50.5])];
      // popups.current = [new mapboxgl.Popup({ offset: 25 }).setText(
      //   'Construction on the Washington Monument began in 1848.',
      // )];
      // pins.current.forEach((pin, i) => {
      //   pin.setPopup(popups.current[i]).addTo(map.current);
      // });
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
