import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivity, updateActivity} from '../actions/actions.js';

class EditActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            activity: {
                id: '',
                desc: '',
                min_temp: '',
                max_temp: '',
                max_wind_speed: '',
                conditions: []
            },
            conditions: []
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(`/api/activities/${id}`)
            .then(response => response.json())
            .then(activity => this.setState({activity: activity}))
        fetch(`/api/conditions`)
            .then(response => response.json())
            .then(conditions => this.setState({conditions: conditions}))
    }

   
    handleChange = (event) => {
        this.setState({
            activity: {...this.state.activity, [event.target.name]: event.target.value }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateActivity();
    }
 

    render(){
        // debugger;
        return (
            <div className="activity-box">
                <form onSubmit={this.handleSubmit}> 
                    <label><strong>Description: </strong></label><input type ="text" name="desc" value={this.state.activity.desc} onChange={this.handleChange} /><br/>
                    <label><strong>Min Temp: </strong></label><input type ="text" name="min_temp" value={this.state.activity.min_temp} onChange={this.handleChange} /><br/>
                    <label><strong>Max Temp: </strong></label><input type ="text" name="max_temp" value={this.state.activity.max_temp} onChange={this.handleChange} /><br/>
                    <label><strong>Max Wind Speed: </strong></label><input type ="text" name="max_wind_speed" value={this.state.activity.max_wind_speed} onChange={this.handleChange} /><br/>
                    <label><strong>Acceptable Conditions: </strong></label>
                        {this.state.conditions.map(condition => (
                            <label><input key={condition.id} 
                            type="checkbox" 
                            value={condition.id} 
                            name="condition" 
                            checked={!!this.state.activity.conditions.find(c => c.id ===condition.id)}
                            id={"condition_id_"+condition.id}/>{condition.desc    } </label>
                        ))} <br/>
                    <input className="big-button center" type="submit" />
                </form>
            </div>
       )
    }
}

// const mapStateToProps = (state) => {
//     return {activity: state.activity}
//   }

export default connect(null, {updateActivity})(EditActivity)