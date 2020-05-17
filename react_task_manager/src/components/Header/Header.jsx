import React from 'react';
import Header_style from './Header.module.css';
import ArrowButton from '../Buttons/ArrowButton/ArrowButton';

function Header(props) {
    const _wrapper = Header_style.wrapper;
    const _arrows = Header_style.arrows;
    const _arrow = `material-icons ${Header_style.arrow}`;
    const arrowUpIcon = 'keyboard_arrow_up';
    const arrowDownIcon = 'keyboard_arrow_down';

    return (
        <div className={_wrapper}>
            <div />
            <div className={_arrows}>
                <ArrowButton
                    className={_arrow}
                    icon={props.sloganHidden ? arrowDownIcon : arrowUpIcon}
                    onClick={props.onToggleSlogan}
                />
            </div>
        </div>
    );
}

export default Header;