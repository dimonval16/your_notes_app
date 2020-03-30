import React from 'react';

export default function Icon(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            <i className='material-icons'>
                {props.icon}
            </i>
        </button>
    );
}