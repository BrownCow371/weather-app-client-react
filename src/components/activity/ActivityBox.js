import React from 'react';

const ActivityBox = ({activity, loading}) => {
    
    function renderThis(){
        return !!activity
    }

    if (loading) {
        return (
            <div className="activity-box">
                <h3> PLEASE HOLD ....... LOADING DATA</h3>
            </div>
        )
    } else if (renderThis()) {
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
            </div>
            )
    } else {
        return null;
    }

}

export default ActivityBox;