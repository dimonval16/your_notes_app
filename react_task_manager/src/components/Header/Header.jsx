import React from 'react';
import Header_style from './Header.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { toggleSlogan } from '../../actions'
import ArrowButton from './ArrowButton/ArrowButton'

export default () => {
    const _wrapper = Header_style.wrapper;
    const _arrows = Header_style.arrows;
    const _arrow = `material-icons ${Header_style.arrow}`;
    const arrowUpIcon = 'keyboard_arrow_up';
    const arrowDownIcon = 'keyboard_arrow_down';

    const sloganHidden = useSelector(state => state.viewFields.sloganHidden);
    const dispatch = useDispatch();

    return (
        <div className={_wrapper}>
            <div></div>
            <div className={_arrows}>
                <ArrowButton
                    className={_arrow}
                    icon={sloganHidden ? arrowDownIcon : arrowUpIcon}
                    onClick={() => dispatch(toggleSlogan())}
                />
            </div>
        </div>
    );
}