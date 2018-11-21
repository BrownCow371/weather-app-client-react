import React from 'react';
import ActivityFormErrors from './ActivityFormErrors.js'

const ActivityForm = ({logged_in, formErrors, title, activity, conditions, handleChange, handleCheckbox, handleSubmit}) => {

    let isDisabled = (!logged_in || (Object.keys(formErrors).find(field => formErrors[field].length > 0)) || activity.desc === "")    
    
    return (
    <>
        <form onSubmit={handleSubmit}> 
            <h2>{title}</h2>
            <label><strong>Description: </strong></label>
                <input 
                    type ="text" 
                    name="desc" 
                    value={activity.desc} 
                    placeholder="Description Required"
                    onChange={handleChange} /><br/>
            <label><strong>Min Temp: </strong></label>
                <input 
                    type ="text" 
                    name="min_temp" 
                    value={activity.min_temp}
                    placeholder="Optional"
                    onChange={handleChange} /><br/>
            <label><strong>Max Temp: </strong></label>
                <input 
                    type ="text" 
                    name="max_temp" 
                    value={activity.max_temp}
                    placeholder="Optional"
                    onChange={handleChange} /><br/>
            <label><strong>Max Wind Speed: </strong></label>
                <input 
                    type ="text" 
                    name="max_wind_speed" 
                    value={activity.max_wind_speed}
                    placeholder="Optional"
                    onChange={handleChange} /><br/>
            <label><strong>Acceptable Conditions: </strong></label>
                <div className="checkbox"> 
                    {conditions.map(condition => (
                        <label key ={condition.id}> 
                            <input 
                                type="checkbox"
                                name="condition"
                                value={condition.id}
                                onChange={handleCheckbox}
                                checked={activity.conditions.findIndex(c=> parseInt(c.id) === parseInt(condition.id)) > -1}
                            /> {condition.desc}
                        </label>
                    ))}
                </div>
            <input className="first-big-button" type="submit" disabled={isDisabled}/>
        </form>
        <ActivityFormErrors 
            formErrors={formErrors}
            logged_in={logged_in}/>
    </>
    )
    
}

// ActivityForm.defaultProps = {
//     activity: {
//         max_wind_speed: '',
//         max_temp: '',
//         min_temp: ''}

// }

export default ActivityForm;