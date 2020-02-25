import React from 'react';

const Checkbox = (props) => {
    return(
        <div className="material-icons">
            {props.completed === 'true' ? 'check_box' : 'check_box_outline_blank'}
        </div>
    );
}

export default Checkbox;