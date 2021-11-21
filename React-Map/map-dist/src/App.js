import './App.css';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
 import ResponsiveDialog from './mappicker';
 import Viewloc from './viewlocation';
 import Homepage from './homepage'
//  import Distance from './distance_calc';
// import LocationPicker from './location';
    // import Mapdist from './samp'
//  import MyGoogleMap from './components/mygooglemap';
// import Locations from './mapdi';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/map" element={<Distance/>}/> */}
           {/* <Route exact path="/" element={<Mapdist/>}/>  */}
          {/* <Route exact path="/mapd" element={<Locations/>}/> */}
          {/* <Route exact path="/" element={<MyGoogleMap/>}/> */}
            <Route exact path="/map" element={<ResponsiveDialog/>}/>  
          <Route exact path="/viewloc" element={<Viewloc/>}/>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
