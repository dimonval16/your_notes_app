import React from 'react';

const ButtonElement = (props) => {
    return (
        <div className={props.className}>
            <span className="material-icons">
                add
            </span>
            <span>
                {props.name}
            </span>
        </div>
    );
}

export default ButtonElement;