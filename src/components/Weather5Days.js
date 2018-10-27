import React, {Component} from 'react';


class Weather5Days extends Component {


    render(){
        // debugger;
        console.log("days of weather", this.props.weather)
        return(
            <div> 
             <p>TESTING: {this.props.weather[0].dt_txt}</p>

                {this.props.weather.map((day) => {
                    return (
                        <li>{day.dt_txt}</li>
                    )
                })}
            </div>
        )
    }

}

export default  Weather5Days;