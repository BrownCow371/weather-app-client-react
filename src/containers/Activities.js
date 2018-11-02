import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeActivity} from '../actions/actions.js';
import ActivityList from '../components/activity/ActivityList.js'
import Loading from '../components/static/Loading.js'


class Activities extends Component {

    handleClickRemove = (id) => {
        if (window.confirm(`Are you sure you want to delete activity id: ${id}?`)) {
        this.props.removeActivity(id)};
    }

    render(){
        if (this.props.loading) {
            return <Loading />
        } else {
            return (
                <>
                    <h2 className="center">Activities List!</h2>
                    <ActivityList handleClickRemove={this.handleClickRemove} activities={this.props.activities}/>  
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities,
            loading: state.loading}
  }

export default connect(mapStateToProps, {removeActivity})(Activities)