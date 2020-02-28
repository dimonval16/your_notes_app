import React from 'react';

const ButtonElement = (props) => {
    let _needWrapper = props.className;

    return (
        <div className={_needWrapper} onClick={props.onClick}>
            <span className="material-icons">add</span>
            <span>{props.name}</span>
        </div>
    );
}

export default ButtonElement;