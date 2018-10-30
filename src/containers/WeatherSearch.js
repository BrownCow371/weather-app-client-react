import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather, fetchForecast} from '../actions/actions.js';
import OneDayWeather from '../components/OneDayWeather.js';



class WeatherSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            zip: '',
        }
    }

    handleOnChange = (event) => {
        this.setState({zip: event.target.value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.zip)
        this.setState({zip: ''})        
    }

    render(){
        console.log("weather search", this.props.weather)
        const isEnabled = this.state.zip.match(/\b\d{5}\b/)

        return(
            <>
                <h2>Search for Current Local Weather:</h2>

                <form onSubmit={this.onSubmitHandler}>
                <label> Enter Zipcode: </label>
                <input type="text" onChange={this.handleOnChange} value={this.state.zip}/>
                <input type="submit" disabled={!isEnabled} />
                </form>
                
                <p>(Only 5 digit US Zipcodes accepted.) </p>
                <OneDayWeather weather={this.props.weather}/>

            </>
        )
    }
}

const mapStoreToProps = (state) => {
    return {weather: state.weather}
  }

export default connect(mapStoreToProps,{fetchWeather})(WeatherSearch)