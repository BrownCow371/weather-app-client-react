import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar.js'

// import {connect} from 'react-redux';
// import {fetchWeather, fetchForecast} from '../actions/actions.js';
import FiveDayWeather from '../components/FiveDayWeather.js';
import OneDayWeather from '../components/OneDayWeather.js';
import Greeting from '../components/Greeting.js';
import WeatherSearch from '../components/WeatherSearch.js';
// import { Link } from 'react-router-dom';

class App extends Component {

   render() {

    return (
      <Router>
        <div className="App">
              <NavBar />
              <Route path = "/" component={Greeting}/>
              <Route exact path='/weather' component={OneDayWeather} />
              <Route exact path='/forecast' component={FiveDayWeather} />
        </div>
      </Router>
    );
  }
}
const mapStoreToProps = (state) => {
  return {weather: state.weather,
          forecast:state.forecast}
}

export default App;
