import React from 'react';

export default function Icon(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            <i className={props.icon ? 'material-icons' : ''}>
                {props.icon ? props.icon : props.text}
            </i>
        </button>
    );
}