import React from 'react';

function NoteIcon(props) {
    return (
        <button className={props.className} {...props}>
            <i className='material-icons' onClick={props.onClick}>
                {props.icon}
            </i>
        </button>
    );
}

export default NoteIcon;