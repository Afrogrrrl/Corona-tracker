import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { makeStyles } from '@material-ui/core/styles';

const mapboxToken =
  process.env.REACT_APP_MAPBOX_TOKEN ||
  'pk.eyJ1IjoiY29yb25hLXRyYWNrZXIiLCJhIjoiY2s5a2Nia2FvMDZubzNmcGh6YWt6eHYybyJ9.-K44T7b_8QWGZNY-S8g24A';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: 'calc(100vh - 80px)',
    position: 'absolute',
    scroll: 'hidden',

    body: {
      background: '#404040',
      color: '#f8f8f8',
      margin: '0',
      padding: '0',
      webkitFontSmoothing: 'antialiased',
    },
  },
  mapContainer: {
    // paddingTop: '10vh',
    // textAlign: 'center',
    // height: '100vh',
    borderLeft: '1px solid #ffff',
    position: 'absolute',
    left: '33.3333%',
    width: '66.6666%',
    top: 0,
    bottom: 0,
  },
  mapSidebar: {
    width: '33.3333%',
  },
  mapPadding: {
    padding: '20px',
    webkitBoxSizing: 'border - box',
    mozBoxSizing: 'border - box',
    boxSizing: 'border - box',
  },
});

function Map() {
  const classes = useStyles();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const initializeMap = ({ setMap, mapContainer }) => {
      const initMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v9', // stylesheet location
        center: [-73.935242, 43.2994],
        zoom: 2,
      });

      initMap.on('load', () => {
        setMap(initMap);
        initMap.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div>
      <div className={(classes.mapSidebar, classes.mapPadding)}>Listing</div>
      <div
        ref={el => {
          mapContainer.current = el;
        }}
        className={(classes.mapContainer, classes.mapPadding)}
      ></div>
    </div>
  );
}

export default Map;
