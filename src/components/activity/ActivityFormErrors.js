import React from 'react';

const ActivityFormErrors = ({formErrors}) => {
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
        </div>
    )
}

export default ActivityFormErrors