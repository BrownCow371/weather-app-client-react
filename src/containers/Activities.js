import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeActivity} from '../actions/actions.js';
import ActivityTable from '../components/activity/ActivityTable.js'
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
                    <h3 className="warning">{this.props.errMessage}</h3>
                    <h2 className="center">Activities List!</h2>
                    <ActivityTable 
                        handleClickRemove={this.handleClickRemove} 
                        activities={this.props.activities}/>  
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities,
            loading: state.loading,
            errMessage: state.errMessages.activityError}
  }

export default connect(mapStateToProps, {removeActivity})(Activities)