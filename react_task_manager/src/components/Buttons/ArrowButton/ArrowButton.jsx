import React from 'react';

export default function ArrowButton(props) {
    return (
        <i className={props.className} onClick={props.onClick}>
            {props.icon}
        </i>
    );
}