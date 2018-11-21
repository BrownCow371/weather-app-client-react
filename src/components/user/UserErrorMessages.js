import React from 'react';

const UserErrorMessages = ({loginErr, userErr}) => {

    const mapUserMessages = () => {
        if (userErr){
            return userErr.map((message, i) => <h2 key={i} className="warning">{message}</h2>)
        }
    }

    const mapLoginMessage = () => {
        if (loginErr){
            return <h2 className="warning">{loginErr}</h2>
        } 
    }
    return (
        <div className="form-errors"> 
            {mapUserMessages()}
            {mapLoginMessage()}
        </div>
    )
}

export default UserErrorMessages