import React from 'react';

const ActivityFormErrors = ({formErrors}) => {
    // debugger;
    return (
        <div className="form-errors"> 
            {Object.keys(formErrors).map((field, i) => {
                // debugger;
                if (formErrors[field].length >0){
                    return (
                        <li key={i}>{formErrors[field]}</li>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default ActivityFormErrors