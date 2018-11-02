import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateActivity} from '../actions/actions.js';
import ActivityForm from '../components/activity/ActivityForm.js';
import Loading from '../components/static/Loading.js'
import {handleActivityChange, handleConditionSelection, validateField} from '../components/activity/changeFunctions.js'

class EditActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            render: "EDIT_FORM",
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

    componentDidMount(){
        let id = this.props.match.params.id;
        let activity = this.props.activities.find(activity => parseInt(activity.id) === parseInt(id));
        if (activity) {
            this.setState({activity: activity}) 
        } else {
            this.setState({render: 'REDIRECT'})
        }
        
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
        this.setState({render: 'REDIRECT_SHOW'})
    }

    render(){
        if (this.props.loading) {
            return <Loading />
        } else {
            switch(this.state.render){
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
                        </div>
                )
            } 
         }
    }  
     
}

const mapStateToProps= (state) => {
    return {activities: state.activities,
            conditions: state.conditions,
            loading: state.loading}
}

export default connect(mapStateToProps, {updateActivity})(EditActivity)