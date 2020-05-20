import React from "react";
import sInput from "./FormsInput.module.css";

export default function FormsInput(props) {
    const _itemStyle = sInput.itemStyle;
    const _input = sInput.input;
    const _buttons = sInput.buttons;

    return (
        <input
            className={`${_itemStyle} ${props.type === 'submit' ? _buttons : _input}`}
            required
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            minLength={props.minLength}
            maxLength={props.maxLength}
        />
    );
}