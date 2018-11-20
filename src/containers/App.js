import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from "react-redux";

// components
import NavBar from '../components/static/NavBar.js';
import Footer from '../components/static/Footer.js';
import Greeting from '../components/static/Greeting.js';

// other containers
import LogInSignUp from './users/LogInSignUp.js';
import Activities from './activities/Activities.js';
import NewActivity from './activities/NewActivity.js';
import ShowActivity from './activities/ShowActivity.js';
import EditActivity from './activities/EditActivity.js';
import WeatherSearch from './weather/WeatherSearch.js';

// actions
import {fetchActivities} from '../actions/activities.js'
import {fetchConditions} from '../actions/conditions.js'


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
              <Route exact path='/login' key ="login" component={LogInSignUp} />
              <Route exact path='/signup' key="signup" component={LogInSignUp} />
            
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
