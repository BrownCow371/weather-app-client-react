import React from 'react';
import {Link} from 'react-router-dom'

const ActivityBox = ({activity}) => {
    
    function renderThis(){
        return !!activity
    }

    if  (renderThis()) {
        return (
            <div className="activity-box">
                <h2>Activity Detail ID: {activity.id}</h2>
                <ul>
                    <li><strong>Description: </strong>{activity.desc}</li>
                    <li><strong>Min. Temp: </strong>{activity.min_temp}</li>
                    <li><strong>Max. Temp: </strong>{activity.max_temp}</li>
                    <li><strong>Max. Wind Speed: </strong>{activity.max_wind_speed}</li>
                    <li><strong>Conditions:</strong></li>
                        <ul>
                            {activity.conditions.map (c => <li key={c.id}>{c.desc}</li>)}
                        </ul>
                </ul>
                <button className="center big-button fixed-width">
                    <Link to={`/activities/${activity.id}/edit`}>Edit Activity</Link>
                </button>
            </div>
            )
    } else {
        return null;
    }

}

export default ActivityBox;