import React from 'react';
import Header_style from './Header.module.css';
import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

export default function Header(props) {
    const _wrapper = Header_style.wrapper;
    const _arrow = `material-icons ${Header_style.arrow}`;
    const _confirmMes = Header_style.confirmMes;
    const _confirmWord = Header_style.confirmWord;
    const _logo = Header_style.logo;
    const arrowUpIcon = 'keyboard_arrow_up';
    const arrowDownIcon = 'keyboard_arrow_down';

    return (
        <div className={_wrapper}>
            {props.isEnabled ?
                <div className={_logo}/>
                :
                <div className={_confirmMes}>
                    Email is not confirmed. {'Please '}
                    <span className={_confirmWord} onClick={props.onConfirm}>
                    confirm
                    </span>
                    {' your'} email.
                </div>
            }
            <ArrowButton
                className={_arrow}
                icon={props.sloganHidden ? arrowDownIcon : arrowUpIcon}
                onClick={props.onToggleSlogan}
            />
        </div>
    );
}