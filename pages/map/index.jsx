import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Setting mapbox token
const MAPBOX_TOKEN =
  "pk.eyJ1IjoicnRkLXN1cGVybWFuIiwiYSI6ImNreTZ3bG03YjAzMTgyd2xqMWtrd2k2cm0ifQ.4VY5RaXBQD2En3LY1VlD4w";
const index = () => {
    console.log(Countries)
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
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: 1200, height: 1000 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default index;
