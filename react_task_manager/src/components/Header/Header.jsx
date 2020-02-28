import React from 'react';
import Header_style from './Header.module.css'

import ArrowButton from './ArrowButton/ArrowButton'

const Header = (props) => {
    let _wrapper = Header_style.wrapper;
    let _arrows = Header_style.arrows;
    let _arrowUp = 'material-icons arrowUp';
    let _arrowDown = 'material-icons arrowDown';
    let arrowUpIcon = 'keyboard_arrow_up';
    let arrowDownIcon = 'keyboard_arrow_down';

    return (
        <div className={_wrapper}>
            <div></div>
            <div className={_arrows}>
                <ArrowButton className={_arrowUp} icon={arrowUpIcon} onClick={props.slideUp} />
                <ArrowButton className={_arrowDown} icon={arrowDownIcon} onClick={props.slideDown} />
            </div>
        </div>
    );
}

export default Header;