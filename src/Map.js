import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import './css/Map.css';
import { showDataOnMap } from './utils';

function Map({center, zoom, countries, casesType}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                { showDataOnMap(countries, casesType) }
            </LeafletMap>
        </div>
    )
}

export default Map;