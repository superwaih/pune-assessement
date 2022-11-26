import React, { useCallback, useEffect, useState } from "react";
import Map, {Source, Layer} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Setting mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1IjoicnRkLXN1cGVybWFuIiwiYSI6ImNreTZ3bG03YjAzMTgyd2xqMWtrd2k2cm0ifQ.4VY5RaXBQD2En3LY1VlD4w";
const index = () => {

  const[countriesData, setCountriesData] = useState([])
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/superwaih/pune-assessement/main/data/countries.json")
      .then(resp => resp.json())
      .then(resp =>
        setCountriesData(resp))
    }, [])

    const onHover = useCallback(event => {
      const {
        features,
        point: {x, y}
      } = event;
      const hoveredFeature = features && features[0];
  
      // prettier-ignore
      setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
    }, []);

  return (
    <div>
     
      {/* layer Controls */}
        <div className="bg-slate-500 w-[200px] px-3 py-4">
            <div className="flex gap-3 items-center">
                <input type="radio"  name="countries" />
                <label className="font-bold" htmlFor="countries">Countries</label>
            </div>
            <div className="flex gap-3 items-center">
                <input type="radio"  name="places" />
                <label htmlFor="countries">Popular Places</label>
            </div>

        </div>

      {/* Map */}
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        interactiveLayerIds={['countriesData']}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: 1200, height: 1000 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      > 
      <Source type="geojson" data={countriesData}>
          <Layer />
        </Source>
      </Map>
    </div>
  );
};

export default index;
