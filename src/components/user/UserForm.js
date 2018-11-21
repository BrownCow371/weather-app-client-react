import React from 'react'

const UserLoginForm = ({handleSubmit, handleChange, user, form}) => {

    // function to return username field for Signup Page
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

    // function to return password confirmation field for Signup Page
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

    const pageHeader = () => {
        if (form ==='/login') {
            return <h2>Login Page</h2>
        } else if (form ==='/signup') {
            return <h2>New User Sign Up Page</h2>
        }
    }
    return (
        <form >
            {pageHeader()}
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