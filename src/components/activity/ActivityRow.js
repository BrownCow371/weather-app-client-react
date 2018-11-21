import React, {Component} from 'react';
// import {updateActivity} from '../../actions/actions.js';
// import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ActivityRow extends Component {
    
    constructor(props){
        super(props);
        this.state={
            likes: this.props.activity.likes,
        }
    }


   handleClickRemove = (id, event) => {
        event.preventDefault();
        this.props.handleClickRemove(id);
    }

    // update likes in API without using the store
   handleClickLike = (event) => {
        event.preventDefault();
        let updatedLikes = () => {return {activity: {likes: this.state.likes+1, id: this.props.activity.id}}}
        fetch(`/api/activities/${this.props.activity.id}`, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'AUTHORIZATION': `Bearer ${sessionStorage.getItem('jwt')}`
                },
            body: JSON.stringify(updatedLikes())
        })
        .then(response =>response.json())
        .then(activity => this.setState({likes: activity.likes}))       
    }

    loggedInColumns = (activity) => {
        if (this.props.logged_in) {
            return (
                <>
                <td> <Link key={activity.id} to ={`/activities/${activity.id}/edit`}>Edit</Link></td>
                <td> <button onClick={(event)=>this.handleClickRemove(activity.id, event)}>REMOVE</button> </td>
                <td> <button onClick={this.handleClickLike}>LIKE</button> </td>
                </>
            )
        }
    }

    render(){
        let activity = this.props.activity
        return (
            <tr>
                <td><Link to={`/activities/${activity.id}`} >{activity.id}</Link> </td>
                <td>{activity.desc} </td>
                <td>{activity.min_temp} </td>
                <td>{activity.max_temp} </td>
                <td>{activity.max_wind_speed} </td>
                
                <td>{activity.conditions.map((condition) => (
                    <span key={condition.id}>{condition.desc}, </span>
                ))}</td>
                {this.loggedInColumns(activity)}
                <td>{this.state.likes}</td>
            </tr>
        )
    }
}

// export default connect(null, {updateActivity})(ActivityRow)
export default ActivityRow