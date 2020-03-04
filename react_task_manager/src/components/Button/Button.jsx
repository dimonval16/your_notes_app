import React from 'react';
import ButtonStyle from './Button.module.css';

import ButtonElement from './ButtonElement/ButtonElement'

const Button = (props) => {
    let _needWrapper = props.id ? ButtonStyle.wrapper_content : ButtonStyle.wrapper;

    return (
        <ButtonElement className={_needWrapper} name={props.name} onClick={props.onButtonClick} />
    );
}

export default Button;