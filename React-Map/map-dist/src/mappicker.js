import React, { useState,useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker
} from "@react-google-maps/api";
import {getPreciseDistance} from 'geolib';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './mappicker.css'
const center = {
  lat: 0,
  lng: -180,
};
function GeoLocate() {
 
  const [id, setId] = useState(0);
const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
   const [markers, setMarkers] = useState([]);
  const [drawMarker, setDrawMarker] = useState(false);
  var dist;
  const addMarker = (coords) => {
    setId((id) => id + 1);
    setMarkers((markers) => markers.concat([{ coords, id }]));
  };
  useEffect(() => {
    const data = localStorage.getItem("my coords");
    if (data) {
      setMarkers(JSON.parse(data));
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("my coords", JSON.stringify(markers));
  });
  
     
  const Addistance =()=>{ axios.post("http://localhost:9090/locinsert",
  {sourcelat:markers[0]['coords']['lat'],sourcelng:markers[0]['coords']['lng'],dlat:markers[1]['coords']['lat'],dlong:markers[1]['coords']['lng'],distance:dist,From:from,To:to} 
 ).then((res)=>{console.log(res.data)
  })}
 function calculatePreciseDistance  ()  {
  dist = getPreciseDistance(
    {lat: markers[0]['coords']['lat'],lng:markers[0]['coords']['lng']},
    {lat:markers[1]['coords']['lat'],lng:markers[1]['coords']['lng']}
    );
    alert(
      `Distance\n${dist / 1000} KM`
    );
    return Addistance();
  };
  return (
    <>
    <div class="site">
	<nav class="nav">
		<div class="nav__title"><Link to="/">GEO LOCATE</Link></div>
		<ul class="nav__list">
		<Link to="/map">	<li class="nav__item">MAP</li></Link>
		<Link to="/viewloc">	<li class="nav__item">VIEW DISTANCES</li></Link>
		</ul>
	</nav>				
</div>
<div className="info">
<div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyAg6x260qOdwA8tFV3c7epFgdLLLfCqMaA">
          <GoogleMap
            id="direction-example"
            mapContainerStyle={{
              height: "600px",
              width: "100%",
            }}
            zoom={2}
            center={center}
            onClick={(e) => ((drawMarker && markers.length <2) ? addMarker(e.latLng.toJSON()) : null)}
          >
            {markers
              ? markers.map((marker) => {
                  return (
                    <Marker
                      key={marker.id}
                      draggable={drawMarker}
                      position={marker.coords}
                      onDragEnd={(e) => (marker.coords = e.latLng.toJSON())}
                    />
                  );
                })
              : null}
              
          </GoogleMap>
        </LoadScript>
      </div>
      <div class="card-body">
<div class="container">
<div class="inputs">
    <label>From </label>
    <input type="text" value={from} onChange={(e) => setFrom(e.target.value) }  />
     <label>To</label>
    <input type="text" value={to}  onChange={(e) => setTo(e.target.value) } /> 
    </div> 
      <button
        type="button"
        style={{ backgroundColor: drawMarker ? "black" : null }}
        onClick={() => {
          setDrawMarker(() => !drawMarker);
        }}
      >ADD MARKER
      </button>
      <button type="button" onClick={() => setMarkers([])}>CLEAR MARKER
      </button>
      <button type="button" onClick={calculatePreciseDistance}>DISTANCE</button>
   </div>
   </div>
 </div>   
    </>
  );
}
export default GeoLocate