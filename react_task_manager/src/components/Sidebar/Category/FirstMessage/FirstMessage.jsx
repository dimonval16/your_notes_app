import React from "react";
import sMessage from './FirstMessage.module.css';
import Icon from "../../../Buttons/Icon/Icon";

export default function FirstMessage() {
    const _message = sMessage.message;
    const _icon = sMessage.icon;

    return (
        <div className={_message}>
            <span>
                Click on button
                <br/>
                below for creating
                <br/>
                first category :)
            </span>
            <Icon
                className={_icon}
                icon={'arrow_downward'}
            />
        </div>
    );
}