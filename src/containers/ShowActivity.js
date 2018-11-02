import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ActivityBox from '../components/activity/ActivityBox.js'

class ShowActivity extends Component {
    constructor(props){
        super(props)
        this.state={
            redirect: false,
        }
    }

    componentDidMount(){
        if (!this.props.activities[0]) {
                this.setState({redirect: true}) 
        } 
    }


    render(){
        if (this.state.redirect){
            return <Redirect to="/"/>
        } else {
            let id = this.props.match.params.id;
            const activity = this.props.activities.find(activity => parseInt(activity.id) === parseInt(id))
            return(
                <ActivityBox activity={activity}/>
            )          
        }
    }
}

const mapStateToProps = (state) => {
    return {activities: state.activities}
  }

export default connect(mapStateToProps)(ShowActivity)