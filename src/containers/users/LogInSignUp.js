import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUser, createUser} from '../../actions/users.js';
import UserForm from '../../components/user/UserForm.js';
import UserErrorMessages from '../../components/user/UserErrorMessages.js';

class LogInSignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            redirect: false
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();

        let key = this.props.location.pathname

        if (key === '/signup') {
            this.props.createUser({user: this.state.user})
            .then(response => {
                if (this.props.logged_in){
                    this.setState({
                    redirect: true})
                }    
             });
        } else if (key === '/login') {
            this.props.loginUser({auth: this.state.user})
            .then(response => {
                if (this.props.logged_in){
                    this.setState({
                    redirect: true})
                }    
             });
        }

        
        // this.setState({user: {
        //     name: '',
        //     email: '',
        //     password: '',
        //     passwordConfirmation: ''
        // }})
    }

    handleChange = (event) => {
        this.setState({
            user: {...this.state.user, 
            [event.target.name]: event.target.value}
        })

    }

    render(){
        let key = this.props.location.pathname
        // if (this.state.redirect){
            // return  <Redirect to={`/`} />
        // if (this.props.logged_in){
        if (!!sessionStorage.jwt){
            return  <h3>Session True {sessionStorage.user}</h3>
        } else {
            return (
                <div className="login-box clearfix"> 
                    <h3>{key} </h3>
                    <UserForm 
                        user={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        form={key}
                    />
                    <UserErrorMessages
                        userErr={this.props.userErr} 
                        loginErr={this.props.loginErr}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userErr: state.errMessages.userErrors, 
        loginErr: state.errMessages.loginError,
        logged_in: state.session}
}
export default connect(mapStateToProps, {loginUser, createUser})(LogInSignUp)