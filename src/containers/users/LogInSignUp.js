import React, {Component} from 'react';
import {connect} from 'react-redux';
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
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            user: {...this.state.user, 
            [event.target.name]: event.target.value}
        })

    }

    handleSubmit =(event) => {
        event.preventDefault();

        let key = this.props.location.pathname

        if (key === '/signup') {
            this.createUser();
        } else if (key === '/login') {
            this.loginUser();
        }
    }

    createUser = () => {
        this.props.createUser({user: this.state.user})
            .then(response => {
                if (this.props.logged_in){
                    this.setState({user: {
                        name: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
                    }})
                }    
                });
    }

    loginUser = () => {
        this.props.loginUser({auth: this.state.user})
            .then(response => {
                if (this.props.logged_in){
                    this.setState({user: {
                        name: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
                    }})
                }    
             });
    }


    render(){
        let key = this.props.location.pathname
        
        if (this.props.logged_in){
            return  <h3>{sessionStorage.user}, you are now logged in.</h3>
        } else {
            return (
                <div className="login-box clearfix"> 
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