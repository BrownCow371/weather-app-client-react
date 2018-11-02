
export function handleActivityChange(event){
   this.setState({
        activity: {...this.state.activity, [event.target.name]: event.target.value }
    })
}

export function handleConditionSelection(event) {
    const clickedCondition = this.props.conditions.find(c=> c.id == event.target.value);
    let conditionArray;
    // if the id provided by the selection is found in the state array of activity conditions
    // then remove the condition from the state array.
    // else add the selection to the state array.
    if(this.state.activity.conditions.findIndex(c => c.id == clickedCondition.id) > -1) {
        conditionArray = this.state.activity.conditions.filter(c => c.id != clickedCondition.id)
    } else {
        conditionArray = [...this.state.activity.conditions, clickedCondition] 
    }
    
    this.setState({activity: {...this.state.activity, conditions: conditionArray}})
}