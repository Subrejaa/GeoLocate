import './viewloc.css'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
function Viewloc (){
	const[distance,setDistance]=useState([])
	useEffect( ()=>{
		viewdistance()
	  },[])
	 const  viewdistance = async()=>{ 
   return await axios.get("http://localhost:9090/viewloc").then((res)=>{
	  setDistance(res.data)
  })}
    return(
	<div class="loc-body">
		 <div class="nav-body">
     <nav>
  <Link to = "/" id="geo"> GEO LOCATE</Link> 
	<a class="dots">.</a>
	<a class="dots">.</a>
  <a class="dots">.</a>
<div class="contents"><Link to = "/map">  MAP</Link>        
  <Link to = "/viewloc"  > VIEW</Link>  </div>      
  </nav>
    </div>

<div class="loc-container">
  <h2>DISTANCE BETWEEN THE LOCATIONS</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-2">FROM LATITUDE</div>
      <div class="col col-2">TO LATITUDE</div>
      <div class="col col-3">DISTANCE(in kms)</div>
    </li>
	{distance.map((e=>{
			return(
    <li class="table-row">
      <div class="col col-2" data-label="Job Id">{e.sourcelat}</div>
      <div class="col col-2" data-label="Customer Name">{e.dlat}</div>
      <div class="col col-3" data-label="Amount">{e.distance}</div>
    </li>
			)}))}
  
  </ul>
</div>
	</div>
	             
    )
}
export default Viewloc