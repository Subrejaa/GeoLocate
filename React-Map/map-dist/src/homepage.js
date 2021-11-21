import react from 'react'
import {useNavigate,Link} from 'react-router-dom';
function Homepage(){
    return(
      <div >
        <div class="site">
	<nav class="nav">
		<div class="nav__title"><Link to="/">GEO LOCATE</Link></div>
		<ul class="nav__list">
		<Link to="/map">	<li class="nav__item">MAP</li></Link>
		<Link to="/viewloc">	<li class="nav__item">VIEW DISTANCES</li></Link>
		</ul>
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