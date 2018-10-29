import React, {Component} from 'react';
import {connect} from 'react-redux'

class OneDayWeather extends Component {

    render() {
        console.log("weather", this.props.weather)
        return (
            <>
            <h2>Current Weather</h2>
                    
            {this.props.weather.map((weather) => (
                <div key={weather.id}>    
                     <p><strong>Temperature:</strong> {weather.temp}</p>
                     <p><strong>Conditions:</strong> {weather.main}</p>
                     <p><img src={"http://openweathermap.org/img/w/" + weather.icon + ".png"} alt="weather icon"/></p>
                 </div> ))}
            </>
        )
    }
}

const mapStoreToProps = (state) => {
    return {weather: state.weather}
  }

  export default connect(mapStoreToProps)(OneDayWeather)
// export default OneDayWeather;