import react from 'react'
import {useNavigate,Link} from 'react-router-dom';
function Homepage(){
    return(
      <div >
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
  <div class="home-body">
  <div class="main-container">
  <div class="cards">
    <div class="card card-1">
      <h2 class="card__title">Geo Locate company calculates linear distance between uk and any point in the map based on the latitude and Longitute.
           User can save the distances in database and can also view the previously calculated distance.</h2>
      <p class="card__apply">
        <Link class="card__link" to="/map">View map <i class="fas fa-arrow-right"></i></Link>
      </p>
    </div>    
  </div>
</div>
   </div>
</div>
    )
}
export default Homepage