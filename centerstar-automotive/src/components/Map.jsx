import React, { useEffect, useRef, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';

mapboxgl.accessToken = 'pk.eyJ1IjoibmV0aGIiLCJhIjoiY2x3cWQ3MXY4MDB4YjJpcTBwaWY4ZGVoZSJ9.Eu3twZNrKtDMv5jg3rFZVw';

function Map({ address }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [zoom, setZoom] = useState(16);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        // Initialize geocoder
        const geocoder = MapboxGeocoder({ accessToken: mapboxgl.accessToken });

        // Geocode the address
        geocoder.forwardGeocode({
            query: address,
            limit: 1
        }).send().then(response => {
            if (response && response.body && response.body.features && response.body.features.length) {
                const feature = response.body.features[0];
                const coordinates = feature.geometry.coordinates;
                setLng(coordinates[0]);
                setLat(coordinates[1]);

                // Initialize the map with the coordinates
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/outdoors-v12',
                    center: coordinates,
                    zoom: zoom
                });

                // Add a marker to the map
                new mapboxgl.Marker()
                    .setLngLat(coordinates)
                    .addTo(map.current);
            } else {
                console.error('No result found for the given address');
            }
        }).catch(err => {
            console.error('Error occurred during geocoding:', err);
        });
    }, [address]);

    return (
        <div className="w-[100%] pb-16 pe-16 ps-16 rounded-2xl">
            <div ref={mapContainer} className="map-container h-[200px] rounded-[8px] opacity-80" />
        </div>
    );
}

export default Map;

