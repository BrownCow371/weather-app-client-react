import React, {Component} from 'react';
import {connect} from 'react-redux';

class Greeting extends Component {
    // needs to be connected to the store so that the User Name is rendered when log in or out
    render(){

        if (sessionStorage.user) {
            return (
                <div>
                <h1 className="center">Welcome <span className="blue">{sessionStorage.user}!</span>, to the Weather Based Activity App!</h1>
            </div>
            )
        } else {
         return(
            <div>
                <h1 className="center">Welcome to the Weather Based Activity App!</h1>
            </div>
         )
        }
    }
}

const mapStateToProps = (state) => {
    return {logged_in: state.session}
}

export default connect(null)(Greeting)