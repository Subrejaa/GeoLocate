import './viewloc.css'
import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
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
  const navigate=useNavigate();
    return(
      <div>
      <div class="site">
      <nav class="nav">
        <div class="nav__title"><Link to="/">GEO LOCATE</Link></div>
        <ul class="nav__list">
        <li class="nav__item"> <Link to="/map"> MAP</Link></li>
        <li class="nav__item"> <Link to="/viewloc"> VIEW DISTANCES</Link></li>
        </ul>
      </nav>				
    </div>

<div class="loc-container">
  <h2>DISTANCE BETWEEN THE LOCATIONS</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-2">FROM LOCATION</div>
      <div class="col col-2">TO LOCATION</div>
      <div class="col col-3">DISTANCE(in kms)</div>
      <div class="col col-3"></div>
    </li>
	{distance.map((e=>{
			return(
    <li class="table-row">
      <div class="col col-2" data-label="Job Id">{e.From}</div>
      <div class="col col-2" data-label="Customer Name">{e.To}</div>
      <div class="col col-3" data-label="Amount">{e.distance}</div>
      <button id="button" onClick={() => {navigate('/viewdetmap', { state: e, replace:true })}}>DETAILS</button>
    </li>
			)}))}
  
  </ul>
</div>
</div>
	             
    )
}
export default Viewloc