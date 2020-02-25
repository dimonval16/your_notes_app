import React from 'react';

const NoteIcon = (props) => {
    return(
        <div className={`material-icons ${props.style}`}>
            {props.icon}
        </div>
    );
}

export default NoteIcon;