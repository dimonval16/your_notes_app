import React from "react";
import filterStyle from './Filter.module.css';
import Icon from "../Buttons/Icon/Icon";

export default function Filter(props) {
    const _wrapper = filterStyle.wrapper;
    const _icon = filterStyle.filter_icon;
    const _iconBlock = filterStyle.icon_block;

    return (
        <div className={_wrapper}>
            <div className={_iconBlock}><Icon className={_icon} icon={'format_list_bulleted'}/></div>
            <div className={_iconBlock}><Icon className={_icon} icon={'check_box'}/></div>
            <div className={_iconBlock}><Icon className={_icon} icon={'check_box_outline_blank'}/></div>
        </div>
    );
}