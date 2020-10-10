import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import './Map.css';

const MapLeaf = props => {
  // create map
  const mapRef = useRef(null);

  useEffect(() => {

    mapRef.current = L.map("map", {
      center: props.center,
      zoom: props.zoom,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, [props.center, props.zoom]);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, [props.center, props.zoom]);

  return <div id="map" className={`map ${props.className}`}/>;
}


export default MapLeaf;