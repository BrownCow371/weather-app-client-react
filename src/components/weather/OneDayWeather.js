import React from 'react';
import Suggestion from './Suggestion.js';

const OneDayWeather = ({weather, loading, handleClick, suggestion, errMessage}) => {

        const handleSuggestionClick = (event) => {
            event.preventDefault();
            handleClick(weather.zip);
        }
        //Determine if weather has been fetched yet.
        function renderThis(){
            return !!weather.zip
        }
  
        //if weather has been fetched, render the weather box. if not, render null 
        if (errMessage.weatherError){ 
            return <h2 className="warning"> {errMessage.weatherError}</h2>   
        } else if (renderThis()) {
            return (
                <>
                    <h2 className="center">Current Weather for {weather.zip}:</h2>  
                    <div key={weather.id} className="weather-box">    
                        <p><strong>Temperature:</strong> {weather.temp}</p>
                        <p><strong>Conditions:</strong> {weather.desc}</p>
                        <p><strong>Humidity:</strong> {weather.humidity}</p>
                        <p><strong>Wind Speed:</strong> {weather.wind_speed}</p>
                        <p className="center"><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon"/></p>
                        <button className="big-button" onClick={handleSuggestionClick}>Get Activity Suggestion</button>
                        <Suggestion suggestion={suggestion}/>
                        <h3>{errMessage.suggestionError}</h3>
                    </div> 
                </>
            )
        } else if (loading) {
            return <div className="weather-box"> <h3>LOADING DATA</h3> </div>   
        } else {
            return null;
        }
   
}

export default OneDayWeather;