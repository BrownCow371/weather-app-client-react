import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {logOutUser} from '../../actions/users.js'
// import {browserHistory} from 'react-router-dom';



class NavBar extends Component {

    logOut = (event) => {
        event.preventDefault();
        this.props.logOutUser();
        sessionStorage.clear();
        // browserHistory.push('/');
        }

   Logged = () =>{
        // if (this.props.logged_in){
        if(sessionStorage.user){
            return <button className="big-button" onClick={this.logOut}>Log Out</button>
        } else {
            return <button className="big-button"><NavLink to ="/login" exact>Log in</NavLink> </button>
        }
    }

    render () {
        return (
            <div className="navbar clearfix">
                <button className="first-big-button"><NavLink to ="/" exact>Home</NavLink> </button>
                <button className="first-big-button"><NavLink to ="/signup" exact>Sign Up</NavLink> </button>
                {this.Logged()}
                <button className="big-button"><NavLink to ="/weather" exact>Weather Search</NavLink> </button> 
                <button className="big-button"><NavLink to ="/activities" exact>Activity List</NavLink> </button> 
                <button className="big-button"><NavLink to ="/activities/new" exact>New Activity</NavLink> </button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {logged_in: state.session};
}

export default connect(mapStateToProps, {logOutUser})(NavBar);