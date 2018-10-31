import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import FiveDayWeather from '../components/FiveDayWeather.js';
import Greeting from '../components/Greeting.js';
import EditActivity from '../components/EditActivity.js'

// other containers
import Activities from './Activities.js';
import WeatherSearch from './WeatherSearch.js';

class App extends Component {


   render() {

    // <Route exact path='/activities/:id/edit' render={routerProps => <EditActivity {...routerProps} /> } />

    return (
      <Router>
        <div className="wrapper">
              <NavBar />
              <Route path = "/" component={Greeting}/>
              <Route exact path='/weather' component={WeatherSearch} />
              <Route exact path='/forecast' component={FiveDayWeather} />
              <Route exact path='/activities' component={Activities} />
              <Route exact path='/activities/:id/edit' component={EditActivity} />
              <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
