import React, {Component, Redirect} from 'react';
import {connect} from 'react-redux';
import {fetchWeather, fetchForecast} from '../actions/actions.js';
import OneDayWeather from './OneDayWeather.js';



class WeatherSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            zip: '10004',
        }
    }

    handleOnChange = (event) => {
        this.setState({zip: event.target.value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.zip)
    }

    render(){

        const isEnabled = this.state.zip.match(/\b\d{5}\b/)

        return(
            <>
                <form onSubmit={this.onSubmitHandler}>
                <label> Enter Zipcode for Local Weather: </label>
                <input type="text" onChange={this.handleOnChange} value={this.state.zip}/>
                <input type="submit" disabled={!isEnabled} />
                </form>
                <p>Only 5 digit US ZipCodes accepted. </p>
            </>
        )
    }
}

const mapStoreToProps = (state) => {
    return {weather: state.weather}
  }

export default connect(null,{fetchWeather})(WeatherSearch)