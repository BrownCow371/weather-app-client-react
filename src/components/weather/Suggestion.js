import React from 'react';
import {Link} from 'react-router-dom';

const Suggestion = ({suggestion}) => {

    function renderThis(){
        return !!suggestion.id
    }

    if (renderThis()) {
        return (
            <div className="suggestion-box">
                <h3>Suggested Activity:</h3>
                <Link to={`/activities/${suggestion.id}`}>{suggestion.desc}</Link>
            </div>
        )
    } else {
        return null;
    }
}

export default Suggestion;