import React, {Component} from 'react';
import {OneDayWeather} from './OneDayWeather.js'


class FiveDayWeather extends Component {

    // buildWeatherList = () => {
    //     return (
    //         this.props.weather.map((day, idx) => <OneDayWeather key={idx} day={day} />)
    //     )
    // }

    render(){
        // debugger;
        console.log("days of weather", this.props.weather)
        return(
            <div> 
                {this.props.weather.map((day, idx) => <OneDayWeather key={idx} day={day} />)}
            </div>
        )
    }

}

export default  FiveDayWeather;