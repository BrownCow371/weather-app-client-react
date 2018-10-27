import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/actions.js';
import Weather5Days from '../components/Weather5Days.js';

class App extends Component {

  componentDidMount(){
    this.props.fetchWeather();
  }

  render() {
    // const {weather} = this.props
    console.log("weather", this.props.weather)
    // debugger;
    return (
      <div className="App">
        <header className="App-header">
          <p>Does this really work</p>
          <Weather5Days weather={this.props.weather} />
          
        </header>
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  return {weather: state.weather}
}

export default connect(mapStoreToProps, {fetchWeather})(App);
