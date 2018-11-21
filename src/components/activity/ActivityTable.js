import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ActivityRow from './ActivityRow.js'
import NewActivity from '../../containers/activities/NewActivity.js';

class ActivityTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            activities: [],
            useState: false
        }
    }
    
    sortListClick = (event) => {
        event.preventDefault();
        this.setState({
            activities: [...this.props.activities].sort(
                (activityA, activityB)=> (activityB.likes - activityA.likes)),
            useState: true
            })
    }

    loggedInColumns = () => {
        if (this.props.logged_in){
            return (
                <>
                <th>Edit</th>
                <th>Remove</th>
                <th>Like</th>
                </>
            )
        }
    }

    newActivityButton = () => {
        if (this.props.logged_in){
            return (
                <button className="big-button">
                    <Link to ="/activities/new" >Add New Activity</Link>
                </button> 
            )
        }
    }

    render(){
        let activityList = this.props.activities;
        
        if (this.state.useState) {
            activityList = this.state.activities
        } 

        return (
            <div className="activities-box">
            <button className="big-button" onClick={this.sortListClick}> Sort by Likes </button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Desc</th>
                            <th>Min Temp</th>
                            <th>Max Temp</th>
                            <th>Max Wind Speed</th>
                            <th>Acceptable Conditions</th>
                            {this.loggedInColumns()}
                            <th>Like Count</th>
                        </tr>
                        {activityList.map((activity) => (
                            <ActivityRow 
                                key={activity.id}
                                activity={activity}
                                logged_in={this.props.logged_in}
                                handleClickRemove={this.props.handleClickRemove}
                                />
                        ))}
                    </tbody>
                </table>
                {this.newActivityButton()}         
            </div>
            )
    }   
}

export default ActivityTable;