import React from 'react';
import { Link } from 'react-router-dom';

import ActivityRow from './ActivityRow.js'

const ActivityTable = (props) => {

    return (
        <div className="activities-box">
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Desc</th>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Max Wind Speed</th>
                        <th>Acceptable Conditions</th>
                        <th>Edit</th>
                        <th>Remove</th>
                        <th>Like</th>
                        <th>Count</th>
                    </tr>
                    {props.activities.map((activity) => (
                        <ActivityRow 
                            activity={activity}
                            handleClickRemove={props.handleClickRemove}
                            />
                    ))}
                </tbody>
            </table>
            <button className="big-button" ><Link to ="/activities/new">Add New Activity</Link> </button>          
        </div>
    )
}

export default ActivityTable;