import React from 'react';
import SloganStyle from './Slogan.module.css';

export default function Slogan(props) {
    const userName = props.state.user.name;
    const sloganHidden = props.state.viewFields.sloganHidden;

    const _wrapperVisible = SloganStyle.wrapperVisible;
    const _wrapperHidden = SloganStyle.wrapperHidden
    const _slogan = SloganStyle.slogan;
    const _image = SloganStyle.image;

    return (
        <div className={sloganHidden ? _wrapperHidden : _wrapperVisible}>
            <div className={_slogan}>
                <span>{`Hi, ${userName}`}</span>
                <br />
                <span>Welcome back to the workspace!</span>
            </div>
            <div className={_image}></div>
        </div>
    );
}