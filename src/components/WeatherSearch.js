import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather, fetchForecast} from '../actions/actions.js';


class WeatherSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            zip: '10004'
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        // this.props.fetchWeather(this.state.zip);
        // this.props.fetchForecast(this.state.zip);
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
            <label> Enter Zipcode for Local Weather: </label>
            <input type="text" inChange={event =>this.setState({zip: event.target.value})} value={this.state.zip}/>
            <input type="submit" />
            </form>
        )
    }
}

export default connect(null,{fetchWeather})(WeatherSearch)