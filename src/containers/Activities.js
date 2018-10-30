import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivities} from '../actions/actions.js';

class Activities extends Component {

    componentDidMount(){
        this.props.fetchActivities();
    }

    render(){
        return (
            <>
                <h2 className="center">Activities List!</h2>
                    <div className="activities-box">
                        <ul>
                            {this.props.activities.map((activity) => (
                                <li key="activity.id">{activity.desc}</li>
                            ))}
                        </ul>
                    </div>
             </>
        )
    }
}

const mapStoreToProps = (state) => {
    return {activities: state.activities}
  }

export default connect(mapStoreToProps, {fetchActivities})(Activities)