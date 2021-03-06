import './App.css'
import AddPlace from './components/Placecomponent/AddPlace';
import{BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import ViewPlace from './components/Placecomponent/Viewplace/ViewPlace';
import UpdatePlace from './components/Placecomponent/Updateplace/UpdatePlace';
import PlaceHome from './components/Placecomponent/PHomePage/PHomepage';

import Generatereport from './components/Placecomponent/Genaratereport/generatereport';
import SearchPlace from './components/Placecomponent/SearchPlace/SearchPlace';


function App() {
  return (
    
    <Router>
    <div>
      <Routes>

      <Route exact path="/addplace" element={<AddPlace/>}/>
      <Route exact path="/viewplace" element={<ViewPlace/>}/>
      <Route exact path="/updateplace/:id" element={<UpdatePlace/>}/>
      <Route exact path="/" element={<PlaceHome/>}/>
      <Route exact path="/searchplace" element={<SearchPlace/>}/>
      <Route extract path = '/generatereport' component={Generatereport}/>

     

      </Routes>
    </div>
    </Router>
  );
}

export default App;
