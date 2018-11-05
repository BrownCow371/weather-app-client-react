import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from "react-redux";

// components
  // save for later - import FiveDayWeather from '../components/FiveDayWeather.js';
import NavBar from '../components/static/NavBar.js';
import Footer from '../components/static/Footer.js';
import Greeting from '../components/static/Greeting.js';

// other containers
import Login from './Login.js';
import Activities from './Activities.js';
import NewActivity from './NewActivity.js';
import ShowActivity from './ShowActivity.js';
import EditActivity from './EditActivity.js';
import WeatherSearch from './WeatherSearch.js';

// actions
import {fetchActivities, fetchConditions} from '../actions/actions.js'

class App extends Component {

  componentDidMount(){
    this.props.fetchConditions();
    this.props.fetchActivities();
  }

   render() {

    return (
      <Router>
        <div className="wrapper">
              <NavBar />
              <Route path = "/" component={Greeting}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/weather' component={WeatherSearch} />
              <Route exact path='/activities' component={Activities} />
              <Route exact path='/activities/new' component={NewActivity} />
              <Route exact path='/activities/:id' component={ShowActivity} />
              <Route exact path='/activities/:id/edit' component={EditActivity} />
              <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(null, {fetchActivities, fetchConditions})(App);
