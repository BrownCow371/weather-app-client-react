import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivities} from '../actions/actions.js';
import ActivityList from '../components/ActivityList.js'

class Activities extends Component {

    componentDidMount(){
        this.props.fetchActivities();
    }

    render(){
        return (
            <>
                <h2 className="center">Activities List!</h2>
                <ActivityList activities={this.props.activities}/>  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities}
  }

export default connect(mapStateToProps, {fetchActivities})(Activities)