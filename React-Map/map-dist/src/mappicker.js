import React, { useState,useEffect } from "react";
import MapPicker from "react-google-map-picker";
import { Polyline } from "google-maps-react";
import {getPreciseDistance} from 'geolib';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import './mappicker.css'
const DefaultLocation = { lat: 10, lng: 106 };
const DefaultLocation2={lat:57.704147,lng:124.349683};
const DefaultZoom = 10;
export default function ResponsiveDialog() {
  const navigate=useNavigate();
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
   const[defaultLocation2,setDefaultLocation2]=useState(DefaultLocation2);
   const[location2,setLocation2]=useState(defaultLocation2);
  const [zoom, setZoom] = useState(DefaultZoom);
  const[location,setLocation]=useState(()=>{
    const saved=localStorage.getItem("location");
    const initialValue=JSON.parse(saved);
    return initialValue || "";

  })
  const[slong,setlng1]=useState();
  const[slat,setlat1]=useState();
  // const[location,setLocation]=useState(() =>{
  //   const saved = localStorage.getItem("location");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // })
  var[dist,setdist]=useState(() =>{
    const saved = localStorage.getItem("Distance");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  useEffect(()=>{
    localStorage.setItem("location",JSON.stringify(location));})
    // useEffect(()=>{
    //   localStorage.setItem("Destlng",JSON.stringify(location.lng));
    // })
  // useEffect(() => {
  //   localStorage.setItem("Destlat", JSON.stringify(location.lat));})
  //   useEffect(() => {
  //     localStorage.setItem("Destlng", JSON.stringify(location.lng));})
  const Insert=()=>{
    setlat1("")
    setlng1("")
    setLocation("")
    setdist("")
  }

  function handleChangeLocation(lat, lng,lat2,lng2) {
    setLocation({ lat: lat, lng: lng });
        setLocation2({lat:lat2,lng:lng2});
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }
  const Addistance =()=>{ axios.post("http://localhost:9090/locinsert",
  {sourcelat:57.704147,sourcelng:124.349683,dlat:location.lat,dlong:location.lng,distance:dist} 
 ).then((res)=>{console.log(res.data)
  })}
   function handleResetLocation() {
     setDefaultLocation({ ...DefaultLocation });
     setZoom(DefaultZoom);
 }
 function calculatePreciseDistance  ()  {
  dist = getPreciseDistance(
    {lat:55.378052,lng:-3.435973},
    {latitude:location.lat,longitude:location.lng},
    // {latitude:location2.lat,longitude:location2.lng}
    
    );
    alert(
      `Distance\n${dist / 1000} KM`
    );
    return Addistance();
  };
  const triangleCoords = [
    {lat: 37.778519, lng: -122.405640},
        { lat: 37.759703, lng: -122.428093 },
  ];
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
<div class="info">
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "500px" ,width:"950px"} }
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        // apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
        apiKey="AIzaSyAg6x260qOdwA8tFV3c7epFgdLLLfCqMaA"  
      />
      <div class="card-body">
<div class="container">
  <div class="inputs">
    <label>From Latitude</label>
    <input type="text" value={57.704147} disabled  />
    <label>From Longitute</label>
    <input type="text" value={124.349683} disabled/>
     <label>To Latitude</label>
    <input type="text" value={location.lat} disabled  />
    <label>To Longitute</label>
    <input type="text" value={location.lng} disabled  />
    <button type="submit" onClick={calculatePreciseDistance}>DISTANCE</button>
  </div>
   </div>
   </div>
      </div>
      
    </>
  );
}