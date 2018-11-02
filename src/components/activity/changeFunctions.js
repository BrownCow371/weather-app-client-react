
export function validateField(name, value){
    let message = '';

    switch (name){
        case 'desc':
            (value.match(/\S/)) ? message = '' : message = "Description cannot be blank."
            this.setState({formErrors: {...this.state.formErrors, desc: message}});
            break;
        case 'min_temp':
            ((value === '' || value.match(/^[0-9]*$/))) && (value >-1 && value <101) ? message = '' : message = "Min. Temp must be a number between 0 and 100."
            this.setState({formErrors: {...this.state.formErrors, min_temp: message}});
            break;
        case 'max_temp':        
        ((value === '' || value.match(/^[0-9]*$/))) && (value >-1 && value < 101) ? message = '' : message = "Max. Temp must be a number between 0 and 100."
            this.setState({formErrors: {...this.state.formErrors, max_temp: message}});
            break;
        case 'max_wind_speed':
            (value.match(/^[0-9]*$/)) && ((value >= 1 && value < 51) || value === '') ? message = '' : message = "Max. Wind Speed must be a number between 1 and 50."
            this.setState({formErrors: {...this.state.formErrors, max_wind_speed: message}});
            break;
        default:
            break;
    }
}

export function handleActivityChange(event){
    const name = event.target.name;
    const value = event.target.value ;
    this.setState({
            activity: {...this.state.activity, [name]: value }
        }, 
        () => {this.validateField(name, value)})
}

export function handleConditionSelection(event) {
    const clickedCondition = this.props.conditions.find(c=> parseInt(c.id) === parseInt(event.target.value));
    let conditionArray;
    // if the id provided by the selection is found in the state array of activity conditions
    // then remove the condition from the state array.
    // else add the selection to the state array.
    if(this.state.activity.conditions.findIndex(c => parseInt(c.id) === parseInt(clickedCondition.id)) > -1) {
        conditionArray = this.state.activity.conditions.filter(c => parseInt(c.id) !== parseInt(clickedCondition.id))
    } else {
        conditionArray = [...this.state.activity.conditions, clickedCondition] 
    }
    
    this.setState({activity: {...this.state.activity, conditions: conditionArray}})
}