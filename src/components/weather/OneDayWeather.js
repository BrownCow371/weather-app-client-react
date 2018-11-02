import React from 'react';

const OneDayWeather = ({weather, loading}) => {


        //Determine if weather has been fetched yet.
        function renderThis(){
            return !!weather.zip
        }
  
        //if weather has been fetched, render the weather box. if not, render null 
        if (renderThis()) {
            return (
                <>
                    <h2 className="center">Current Weather for {weather.zip}:</h2>     
                    <div key={weather.id} className="weather-box">    
                        <p><strong>Temperature:</strong> {weather.temp}</p>
                        <p><strong>Conditions:</strong> {weather.desc}</p>
                        <p><strong>Humidity:</strong> {weather.humidity}</p>
                        <p><strong>Wind Speed:</strong> {weather.wind_speed}</p>
                        <p className="center"><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon"/></p>
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