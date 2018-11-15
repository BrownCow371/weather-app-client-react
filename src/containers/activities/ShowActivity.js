import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from '../../components/static/Loading.js';
import ActivityBox from '../../components/activity/ActivityBox.js';

class ShowActivity extends Component {

    render(){
        if (this.props.loading) {
            return <Loading />
        } else {
            let id = this.props.match.params.id;
            const activity = this.props.activities.find(activity => parseInt(activity.id) === parseInt(id))

            if (!activity && this.props.match.params.id !=='new'){
                return <Redirect to="/"/>
            } else {
                return(
                    <ActivityBox activity={activity}/>
                ) 
            }         
        }
    }
}

   
const mapStateToProps = (state) => {
    return {activities: state.activities,
            loading: state.loading}
  }

export default connect(mapStateToProps)(ShowActivity)