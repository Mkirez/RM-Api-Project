import React from 'react';
import Header from './components/ui/Header';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Charachters from './components/charachters/Charachters';
import Episodes from './components/episodes/Episodes';
import Locations from './components/locations/Locations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App =() => {
  
  return (
    <Router>
  <div className='container'>
    <Navbar />
    <Header />
    <Switch>
    <Route path="/Charachters" component={Charachters}/>
    <Route path="/Episodes" exact component={Episodes}/>
    <Route path="/Locations" exact component={Locations}/>
    </Switch>
  </div>
    </Router>
  )
}

export default App;
