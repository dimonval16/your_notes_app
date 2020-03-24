import React from 'react';
import Header_style from './Header.module.css'

import ArrowButton from './ArrowButton/ArrowButton'

const Header = (props) => {
    const _wrapper = Header_style.wrapper;
    const _arrows = Header_style.arrows;
    const _arrow = `material-icons ${Header_style.arrow}`;
    const arrowUpIcon = 'keyboard_arrow_up';
    const arrowDownIcon = 'keyboard_arrow_down';

    return (
        <div className={_wrapper}>
            <div></div>
            <div className={_arrows}>
                <ArrowButton
                    className={_arrow}
                    icon={props.sloganHidden ? arrowDownIcon : arrowUpIcon}
                    onClick={props.toggleSlogan}
                />
            </div>
        </div>
    );
}

export default Header;