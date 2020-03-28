import React from 'react';
import ButtonStyle from './Button.module.css';

function Button(props) {
    let _needWrapper = props.id ? ButtonStyle.wrapper_content : ButtonStyle.wrapper;

    return (
        <div className={_needWrapper} onClick={props.onButtonClick}>
            <span className="material-icons">add</span>
            <span>{props.name}</span>
        </div>
    );
}

export default Button;