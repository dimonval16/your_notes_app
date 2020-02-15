import React from 'react';

import ButtonStyle from './Button.module.css';

const Button = (props) => {
    return( props.id ?
        <div className={ButtonStyle.wrapper_content}>
            <span className="material-icons">
                add
            </span>
            <span>
                {props.name}
            </span>
        </div>
        :
        <div className={ButtonStyle.wrapper}>
            <span className="material-icons">
                add
            </span>
            <span>
                {props.name}
            </span>
        </div>
    );
}

export default Button;

