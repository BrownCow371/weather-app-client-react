import React from 'react';
import { Link } from 'react-router-dom';

const ActivityList = (props) => {

    const handleClickRemove = (id, event) => {
        event.preventDefault();
        props.handleClickRemove(id);
    }

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

                    </tr>
                    {props.activities.map((activity) => (
                        <tr key={activity.id}>
                            <td><Link to={`/activities/${activity.id}`} >{activity.id}</Link> </td>
                            <td>{activity.desc} </td>
                            <td>{activity.min_temp} </td>
                            <td>{activity.max_temp} </td>
                            <td>{activity.max_wind_speed} </td>
                            
                            <td>{activity.conditions.map((condition) => (
                                <span key={condition.id}>{condition.desc}, </span>
                            ))}</td>

                            <td> <Link key={activity.id} to ={`/activities/${activity.id}/edit`}>Edit</Link></td>
                            <td> <button onClick={(event)=>handleClickRemove(activity.id, event)}>REMOVE</button> </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="big-button" ><Link to ="/activities/new">Add New Activity</Link> </button>          

            </div>
        )
    
}

export default ActivityList;