import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivity} from '../actions/actions.js';

class EditActivity extends Component {
    // constructor(props){
    //     super(props)

    //     let activityId = this.props.match.params.id
    //     let activity = this.props.activities.find(activity => activity.id === activityId)
    //     debugger;
    //     this.state ={
    //         desc: activity.desc,
    //         min_temp: activity.min_temp,
    //         max_temp: activity.max_temp,
    //         max_wind_speed: activity.max_wind_speed
    //     }
    // }

    componentDidMount(){
        this.props.fetchActivity(this.props.match.params.id)
    }

    render(){

        return (
            <p>I am an Edit page for activity ID {this.props.match.params.id} </p>
        )
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities}
  }

export default connect(mapStateToProps, {fetchActivity})(EditActivity)