import React from 'react';
// import {connect} from 'react-redux'

const OneDayWeather = (props) => {

        function renderThis(){
            console.log("weather", props.weather)

            return !!props.weather[0]
        }
  

        if (renderThis()) {
        return (
            <>
            <h2 className="center">Current Weather for {props.weather[0].zip}:</h2>
                    
            {props.weather.map((weather) => (
                <div key={weather.id} className="weather-box">    
                     <p><strong>Temperature:</strong> {weather.temp}</p>
                     <p><strong>Conditions:</strong> {weather.desc}</p>
                     <p><strong>Humidity:</strong> {weather.humidity}</p>
                     <p><strong>Wind Speed:</strong> {weather.wind_speed}</p>
                     <p className="center"><img src={"http://openweathermap.org/img/w/" + weather.icon + ".png"} alt="weather icon"/></p>
                 </div> ))}
            </>
        )
        } else {
                return (
                    <>
                    </>
                )
            }
   
}

// const mapStoreToProps = (state) => {
//     return {weather: state.weather}
//   }

//   export default connect(mapStoreToProps)(OneDayWeather)
export default OneDayWeather;