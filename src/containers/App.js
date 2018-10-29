import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchWeather, fetchForecast} from '../actions/actions.js';
import FiveDayWeather from '../components/FiveDayWeather.js';
import OneDayWeather from '../components/OneDayWeather.js';
import Greeting from '../components/Greeting.js';
import WeatherSearch from '../components/WeatherSearch.js';
import { Link } from 'react-router-dom';

class App extends Component {

  // componentDidMount(){
  //   //fetch current weather
  //   this.props.fetchForecast('10004');
  //   this.props.fetchWeather('10004');
  // }

  // <FiveDayWeather weather={this.props.weather} />
  // {this.props.weather.main.temp}
  // {this.props.forecast.map(forecast => <li>{forecast.dt_txt}</li>)}

  render() {
    // const {weather} = this.props
    console.log("weather", this.props.weather)
    console.log("forecast", this.props.forecast)

    // debugger;
    return (
      <Router>
        <div className="App">
            <Greeting />
            <WeatherSearch />
              <Route exact path="/" component={Greeting}/>
              <Route exact path='/weather' component={OneDayWeather} />
              <Route exact path='/forecast' component={FiveDayWeather} />
            <OneDayWeather weather={this.props.weather}/>
        </div>
      </Router>
    );
  }
}
const mapStoreToProps = (state) => {
  return {weather: state.weather,
          forecast:state.forecast}
}

export default connect(mapStoreToProps, {fetchWeather, fetchForecast})(App);
