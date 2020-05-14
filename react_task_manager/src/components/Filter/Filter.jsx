import React from "react";
import filterStyle from './Filter.module.css';
import Icon from "../Buttons/Icon/Icon";
import { ALL, COMPLETED, NOT_COMPLETED } from '../../redux/actions';

export default function Filter(props) {
    const _wrapper = filterStyle.wrapper;
    const _icon = filterStyle.filter_icon;
    const _iconBlock = filterStyle.icon_block;
    const _iconBlockActive = filterStyle.icon_block_active;

    return (
        <div className={_wrapper}>
            <div
                className={props.activeFilter === ALL ? _iconBlockActive : _iconBlock}
                onClick={() => props.onSetFilter(ALL)}
            >
                <Icon className={_icon} icon={'format_list_bulleted'}/>
            </div>
            <div
                className={props.activeFilter === COMPLETED ? _iconBlockActive : _iconBlock}
                onClick={() => props.onSetFilter(COMPLETED)}
            >
                <Icon className={_icon} icon={'check_box'}/>
            </div>
            <div
                className={props.activeFilter === NOT_COMPLETED ? _iconBlockActive : _iconBlock}
                onClick={() => props.onSetFilter(NOT_COMPLETED)}
            >
                <Icon className={_icon} icon={'check_box_outline_blank'}/>
            </div>
        </div>
    );
}