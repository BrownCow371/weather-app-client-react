import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {fetchActivities} from '../actions/actions.js';
import ActivityList from '../components/activity/ActivityList.js'

class Activities extends Component {

    render(){
        return (
            <>
                <h2 className="center">Activities List!</h2>
                <ActivityList loading={this.props.loading} activities={this.props.activities}/>  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities,
            loading: state.loading}
  }

export default connect(mapStateToProps)(Activities)