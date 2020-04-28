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
  },
  mapContainer: {
    paddingTop: '3vh',
    textAlign: 'center',
    height: '100vh',
    // border: '1px solid #fff',
    // position: absolute,
    // left: '33.3333%',
    // width: '66.6666%',
    // top: 0,
    // bottom: 0,
  },
  mapSidebar: {
    width: '33.3333%',
  },
});

function Map() {
  const classes = useStyles();

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const initializeMap = () => {
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

    if (!map) initializeMap();
  }, [map]);

  return (
    <div className={classes.mapContainer}>
      <h4>Check out the Map!</h4>
      <h4>...COMING SOON...</h4>
      <div className={classes.mapSidebar}></div>
      <div
        ref={el => {
          mapContainer.current = el;
        }}
        className={classes.root}
      />
    </div>
  );
}

export default Map;
