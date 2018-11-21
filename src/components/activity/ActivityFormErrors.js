import React from 'react';

const ActivityFormErrors = ({formErrors, logged_in}) => {

    const loggedIn = () => {
        // add warning about being logged in if not already
        if (!logged_in){
            return <li>Please log in to submit this form. </li>
        }
    }
    return (
        <div className="form-errors"> 
            {Object.keys(formErrors).map((field, i) => {
                if (formErrors[field].length >0){
                    return (
                        <li key={i}>{formErrors[field]}</li>
                    )
                } else {
                    return null;
                }
            })}
            {loggedIn()}
        </div>
    )
}

export default ActivityFormErrors