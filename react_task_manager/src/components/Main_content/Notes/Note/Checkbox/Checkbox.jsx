import React from 'react';

const Checkbox = (props) => {
    let needIcon = props.completed === true ? 'check_box' : 'check_box_outline_blank';
    let _checkbox = `material-icons ${props.className}`;

    return (
        <div className={_checkbox} onClick={props.onChange}>
            {needIcon}
        </div>
    );
}

export default Checkbox;