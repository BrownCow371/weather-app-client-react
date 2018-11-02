import React from 'react';

const ActivityForm = (props) => {

       
    return (
        <form onSubmit={props.handleSubmit}> 
            <h2>{props.title}</h2>
            <label><strong>Description: </strong></label>
                <input 
                    type ="text" 
                    name="desc" 
                    value={props.activity.desc} 
                    onChange={props.handleChange} /><br/>
            <label><strong>Min Temp: </strong></label>
                <input 
                    type ="text" 
                    name="min_temp" 
                    value={props.activity.min_temp} 
                    onChange={props.handleChange} /><br/>
            <label><strong>Max Temp: </strong></label>
                <input 
                    type ="text" 
                    name="max_temp" 
                    value={props.activity.max_temp} 
                    onChange={props.handleChange} /><br/>
            <label><strong>Max Wind Speed: </strong></label>
                <input 
                    type ="text" 
                    name="max_wind_speed" 
                    value={props.activity.max_wind_speed} 
                    onChange={props.handleChange} /><br/>
            <label><strong>Acceptable Conditions: </strong></label>
                <div className="checkbox"> 
                    {props.conditions.map(condition => (
                        <label key ={condition.id}> 
                            <input 
                                type="checkbox"
                                name="condition"
                                value={condition.id}
                                onChange={props.handleCheckbox}
                                checked={props.activity.conditions.findIndex(c=> c.id == condition.id) > -1}
                            /> {condition.desc}
                        </label>
                    ))}
                </div>
            <input className="big-button center" type="submit" />
        </form>
    )
}

export default ActivityForm;