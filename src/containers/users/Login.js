import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUser} from '../../actions/users.js';


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            auth: {
                email: '',
                password: ''
            },
            redirect: false
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.props.loginUser(this.state)
        .then(response => {
            if (this.props.logged_in){
                this.setState({
                redirect: true})
            }    
        });
        this.setState({auth: {
            email: '',
            password: ''
        }})
    }

    handleChange = (event) => {
        this.setState({
            auth: {...this.state.auth, 
            [event.target.name]: event.target.value}
        })

    }

    render(){

        // if (this.state.redirect){
            // return  <Redirect to={`/`} />
        if (this.props.logged_in){
            return  <h3>Session True</h3>
        } else {
            return (
                <div className="login-box clearfix">  
                    <form >
                        <label><strong> Email: </strong></label>
                        <input type="email" name="email" value={this.state.auth.email} onChange={this.handleChange}/>
                        <br/>
                        <label><strong> Password: </strong></label>
                        <input type="password" name="password" value={this.state.auth.password} onChange={this.handleChange}/>
                        <br/>
                        <input className="first-big-button" type="submit"  onClick={this.handleSubmit}/>
                    </form>
                    <h2 className="warning">{this.props.errMessage}</h2>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errMessage: state.errMessages.userError,
        logged_in: state.session
    }
}

export default connect(mapStateToProps, {loginUser})(Login)