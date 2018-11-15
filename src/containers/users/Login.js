import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/users.js';


class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            auth: {
                email: '',
                password: ''
            }
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.props.loginUser(this.state);
        // this.setState({auth: {
        //     email: '',
        //     password: ''
        // }});
    }

    handleChange = (event) => {
        this.setState({
            auth: {...this.state.auth, 
            [event.target.name]: event.target.value}
        })

    }

    render(){
        return (
            <form>
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

export default connect(null, {loginUser})(Login)