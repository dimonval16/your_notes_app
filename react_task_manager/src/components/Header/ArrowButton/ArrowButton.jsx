import React from 'react';

const ArrowButton = (props) => {
    return (
        <i className={props.className} onClick={props.onClick}>
            {props.icon}
        </i>
    );
}

export default ArrowButton;