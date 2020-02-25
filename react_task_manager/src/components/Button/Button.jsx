import React from 'react';
import ButtonStyle from './Button.module.css';

import ButtonElement from './ButtonElement/ButtonElement'

const Button = (props) => {
    return(
        <ButtonElement 
            className={ props.id ? ButtonStyle.wrapper_content : ButtonStyle.wrapper }
            name={props.name}
        />
    );
}

export default Button;