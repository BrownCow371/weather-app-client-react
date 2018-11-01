import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/actions.js';
import OneDayWeather from '../components/weather/OneDayWeather.js';



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
                <label><strong> Enter Zipcode: </strong></label>
                <input type="text" onChange={this.handleOnChange} value={this.state.zip}/>
                <input type="submit" disabled={!isEnabled} />
                </form>
                
                <p><strong>(Only 5 digit US Zipcodes accepted.) </strong></p>
                <OneDayWeather weather={this.props.weather}/>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {weather: state.weather}
  }

export default connect(mapStateToProps,{fetchWeather})(WeatherSearch)