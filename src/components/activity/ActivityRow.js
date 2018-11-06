import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ActivityRow extends Component {
    
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

   handleClickLike = () => {
        this.setState({likes: ++this.state.likes})
        fetch(`/api/activities/${this.props.activity.id}`, {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            body: JSON.stringify(this.state)
        })
        .then(response =>response.json())
        .then(activity => console.log(activity))

    }

        render(){
            let activity = this.props.activity
        return (
            <tr key={activity.id}>
                <td><Link to={`/activities/${activity.id}`} >{activity.id}</Link> </td>
                <td>{activity.desc} </td>
                <td>{activity.min_temp} </td>
                <td>{activity.max_temp} </td>
                <td>{activity.max_wind_speed} </td>
                
                <td>{activity.conditions.map((condition) => (
                    <span key={condition.id}>{condition.desc}, </span>
                ))}</td>

                <td> <Link key={activity.id} to ={`/activities/${activity.id}/edit`}>Edit</Link></td>
                <td> <button onClick={(event)=>this.handleClickRemove(activity.id, event)}>REMOVE</button> </td>
                <td> <button onClick={this.handleClickLike}>LIKE</button> </td>
                <td> {this.state.likes}</td>
            </tr>
        )
    }
}