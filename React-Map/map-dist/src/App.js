import './App.css';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
 import ResponsiveDialog from './mappicker';
 import Viewloc from './viewlocation';
 import Homepage from './homepage'
 import Viewdetmap from './viewdetmap'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/map" element={<ResponsiveDialog/>}/>  
          <Route exact path="/viewloc" element={<Viewloc/>}/>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/viewdetmap" element={<Viewdetmap/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
