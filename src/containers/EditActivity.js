import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateActivity} from '../actions/actions.js';
import ActivityForm from '../components/activity/ActivityForm.js';
// import Loading from '../components/static/Loading.js'
import {handleActivityChange, handleConditionSelection, validateField} from '../components/activity/changeFunctions.js'

class EditActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: "EDIT_FORM",
            activity: {
                id: '',
                desc: '',
                min_temp: '',
                max_temp: '',
                max_wind_speed: '',
                conditions: []
            },
            formErrors: {
                desc: '', 
                max_temp: '', 
                min_temp: '', 
                max_wind_speed: ''},
        }
        this.validateField = validateField.bind(this);
        this.handleActivityChange = handleActivityChange.bind(this);
        this.handleConditionSelection = handleConditionSelection.bind(this)
    }

    swapNull = (activity) => {
        // swap out null values for empty strings to appease controlled form
        if (activity.max_wind_speed === null){
            activity.max_wind_speed= ''
        }
        
        if (activity.max_temp === null){
            activity.max_temp = ''
        }

        if (activity.min_temp ===null){
            activity.min_temp = ''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let activity = this.props.activities.find(activity => parseInt(activity.id) === parseInt(id));
        if (activity) {
            
            this.swapNull(activity)

            this.setState({activity: activity}) 
        } else {
            this.setState({redirect: 'REDIRECT'})
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateActivity(this.state)
        .then(action => {
            console.log("edit action", action)
            if(action) {
                this.setState({redirect: 'REDIRECT_SHOW'})
            }
        })  
    }


    render(){
        switch(this.state.redirect){
            case 'REDIRECT_SHOW':
                return <Redirect to={`/activities/${this.state.activity.id}`}/>
            case 'REDIRECT':
                return <Redirect to="/activities"/>
            default:
                return (
                    <div className="activity-box">
                        <ActivityForm 
                            formErrors={this.state.formErrors}
                            activity={this.state.activity}
                            conditions={this.props.conditions} 
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleActivityChange}
                            handleCheckbox={this.handleConditionSelection}
                            title={`Edit Activity ID: ${this.state.activity.id} Form`}/>
                        <h3 className="warning">{this.props.errMessage}</h3>
                    </div>
            )
        } 
    }
     
}

const mapStateToProps= (state) => {
    return {activities: state.activities,
            conditions: state.conditions,
            errMessage: state.errMessages.activityError}
}

export default connect(mapStateToProps, {updateActivity})(EditActivity)