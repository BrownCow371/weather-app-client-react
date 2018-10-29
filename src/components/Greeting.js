import React, {Component} from 'react';
import WeatherSearch from './WeatherSearch.js';
import { Link } from 'react-router-dom';

{/* <Link to = "/weather" exact>Weather Search</Link> */}

class Greeting extends Component {

    render(){
        return(
            <div>
                <h1>Welcome to the Weather Based Activity Suggestion App!</h1>
                <WeatherSearch />
            </div>
         )
    }

}

export default Greeting