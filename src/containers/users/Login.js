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
            this.setState({auth: {
                email: '',
                password: ''
            },
            redirect: true})
        });
    }

    handleChange = (event) => {
        this.setState({
            auth: {...this.state.auth, 
            [event.target.name]: event.target.value}
        })

    }

    render(){

        if (this.state.redirect){
            return  <Redirect to={`/`} />
        } else {
            return (
                <form>
                    {this.props.errMessage}
                    <label><strong> Email: </strong></label>
                    <input type="email" name="email" value={this.state.auth.email} onChange={this.handleChange}/>
                    <br />
                    <label><strong> Password: </strong></label>
                    <input type="password" name="password" value={this.state.auth.password} onChange={this.handleChange}/>
                    <br />
                    <input type="submit"  onClick={this.handleSubmit}/>
                </form>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errMessage: state.errMessages.userError
    }
}

export default connect(mapStateToProps, {loginUser})(Login)