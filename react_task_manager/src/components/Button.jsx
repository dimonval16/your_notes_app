import React from 'react';

import ButtonStyle from './Button.module.css';

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

const Button = (props) => {
    return( props.id ?
            <ButtonElement className={ButtonStyle.wrapper_content} name={props.name}/>
        :
            <ButtonElement className={`${ButtonStyle.wrapper} ${ButtonStyle.button_sidebar}`} name={props.name}/>
    );
}

export default Button;

