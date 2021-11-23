import React,{useState,useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Viewdetmap(){
    const navigate=useNavigate();
    const location=useLocation();
    const[viewdist,setviewdist]=useState([]);
    const[sourcelat,setSourcelat]=useState(location.state.sourcelat)
    const[sourcelng,setSourcelng]=useState(location.state.sourcelng)
    const[tolat,setTolat]=useState(location.state.dlat)
    const[tolng,setTolng]=useState(location.state.dlong)
    const[from,setFrom]=useState(location.state.From)
    const[to,setTo]=useState(location.state.To)
    const[dist,setDist]=useState(location.state.distance)
    
    useEffect( ()=>{
		viewmap()
	  },[])
      const viewmap =()=>{ axios.put("http://localhost:9090/viewdetmap",
      {_id:location.state._id,sourcelat:sourcelat,sourcelng:sourcelng,dlat:tolat,dlong:tolng,distance:dist,From:from,To:to} 
     ).then((res)=>{console.log(res.data)
      })}
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
      <div class="view-body">
    <div class="view-card">
  <div class="view-card-text">
    <div class="portada">
    
    </div>
   
    <div class="title-total">   
      <h2>From:{from}</h2>
    <h2>To:{to}</h2>
    <label>From Latitude</label>
  <div class="desc">{sourcelat}</div>
  <label>From Longitute</label>
      <div class="desc">{sourcelng}</div>
      <label>To Latitude</label>
      <div class="desc">{tolat}</div>
      <label>To Latitude</label>
      <div class="desc">{tolng}</div>
      <label>Distance</label>
      <div class="desc">{dist}</div>
  <div class="actions">
    <button type="button" onClick={() => {navigate('/viewloc')}}>BACK</button>
  </div></div>
   
  </div>
</div>
</div>
</div>
  )
}

export default Viewdetmap