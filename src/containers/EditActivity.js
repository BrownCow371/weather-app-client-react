import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateActivity} from '../actions/actions.js';
import ActivityForm from '../components/activity/ActivityForm.js';
import {handleActivityChange, handleConditionSelection} from '../components/activity/changeFunctions.js'

class EditActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            activity: {
                id: '',
                desc: '',
                min_temp: '',
                max_temp: '',
                max_wind_speed: '',
                conditions: []
            }
        }
        this.handleActivityChange = handleActivityChange.bind(this);
        this.handleConditionSelection = handleConditionSelection.bind(this)
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let activity = this.props.activities.find(activity => activity.id == id);
        this.setState({activity: activity})

        // fetch(`/api/activities/${id}`)
        //     .then(response => response.json())
        //     .then(activity => this.setState({activity: activity}))

        // fetch(`/api/conditions`)
        //     .then(response => response.json())
        //     .then(conditions => this.setState({conditions: conditions}))
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateActivity(this.state)
            .then()
    }

    render(){
        return (
            <div className="activity-box">
                <ActivityForm 
                    activity={this.state.activity}
                    conditions={this.props.conditions} 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleActivityChange}
                    handleCheckbox={this.handleConditionSelection}
                    title={"Edit Activity ID: " + this.state.activity.id +" Form"}/>
            </div>
       )
    }
}

const mapStateToProps= (state) => {
    return {activities: state.activities,
            conditions: state.conditions}
}

export default connect(mapStateToProps, {updateActivity})(EditActivity)