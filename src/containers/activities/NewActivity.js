import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {addActivity} from '../../actions/activities.js';
import ActivityForm from '../../components/activity/ActivityForm.js';
// import Loading from '../components/static/Loading.js';
import {handleActivityChange, handleConditionSelection, validateField} from '../../components/activity/changeFunctions.js';

class NewActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: "FORM",
            activity: {
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
                max_wind_speed: ''}
        }
        this.validateField = validateField.bind(this)
        this.handleActivityChange = handleActivityChange.bind(this);
        this.handleConditionSelection = handleConditionSelection.bind(this)
    }

    handleNewSubmit = (event) => {
        event.preventDefault();
        // grab array of condition ids and add to activity object
        let newActivity = () => {return {activity: {...this.state.activity, 
            condition_ids: this.state.activity.conditions.map(c => c.id)}}}

        // send activity to addActivity action, 
        // post fetch redirect to show page for new activity
        this.props.addActivity(newActivity(), sessionStorage.getItem('jwt'))
        .then(action => {
            if (action) {
                this.setState({ id: action.payload.id})
                this.setState({redirect: "REDIRECT_SHOW"})
            }
        })
    }
    


    render(){
        if (this.props.loading){
            return null
        } else {
            switch(this.state.redirect){
                case "FORM":
                    return (
                        <div className="activity-box">
                            <ActivityForm 
                                formErrors={this.state.formErrors}
                                activity={this.state.activity}
                                conditions={this.props.conditions} 
                                handleSubmit={this.handleNewSubmit}
                                handleChange={this.handleActivityChange}
                                handleCheckbox={this.handleConditionSelection}
                                title={"Add New Activity Form"}
                                logged_in={this.props.logged_in}/>
                            <h3 className="warning">{this.props.errMessage}</h3>
                        </div>
                    )
                case "REDIRECT_SHOW":
                    return <Redirect to={`/activities/${this.state.id}`} />
                default:
                    return null;
            }
        }
    }
}


const mapStateToProps= (state) => {
    return {conditions: state.conditions,
            loading: state.loading,
            errMessage: state.errMessages.activityError,
            logged_in: state.session}
}

export default connect(mapStateToProps, {addActivity})(NewActivity)