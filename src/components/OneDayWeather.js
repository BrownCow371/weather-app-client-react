import React, {Component} from 'react';
import {connect} from 'react-redux'

class OneDayWeather extends Component {


    render() {
        // let iconUrl = this.props.weather.map(weather => `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)[0]

        return (
            <>
                <h2>Current Weather</h2>
                    
            {this.props.weather.map((weather, index) => (
                <ul key={index}>    
                     <li >{weather.main.temp}</li>
                     <li>{weather.weather[0].main}</li>
                     <li><img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} alt="weather icon"/></li>
                 </ul> ))}
            </>
        )
    }
}

// const mapStoreToProps = (state) => {
//     return {weather: state.weather}
//   }

//   export default connect(mapStoreToProps)(OneDayWeather)
export default OneDayWeather;