import React from 'react'

const UserLoginForm = ({handleSubmit, handleChange, user, form}) => {

    const userName = () => {
        if (form ==='/signup') {
            return (
                <>
                    <label><strong> Name: </strong></label>
                    <input type="text" name="name" value={user.name} onChange={handleChange}/>
                    <br/>
                </>
            )
        }
    }

    const passwordConfirmation = () => {
        if (form ==='/signup') {
            return (
                <>  
                    <label><strong> Password Confirmation: </strong></label>
                    <input type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange}/>
                    <br/>
                </>
            )
        }
    }
    return (
        <form >
            {userName()}
            <label><strong> Email: </strong></label>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
            <br/>
            <label><strong> Password: </strong></label>
            <input type="password" name="password" value={user.password} onChange={handleChange}/>
            <br/>
            {passwordConfirmation()}
            <input className="first-big-button" type="submit"  onClick={handleSubmit}/>
        </form>
    )
}

export default UserLoginForm;