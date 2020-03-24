import React from 'react';
import Slogan_style from './Slogan.module.css';

const Slogan = (props) => {
    const user = props.state.user;
    const sloganHidden = props.state.viewFields.sloganHidden;

    const _wrapperVisible = Slogan_style.wrapperVisible;
    const _wrapperHidden = Slogan_style.wrapperHidden
    const _slogan = Slogan_style.slogan;
    const _image = Slogan_style.image;
    const _needWrapper = sloganHidden ? _wrapperHidden : _wrapperVisible;

    let greeting = `Hi, ${user.name}`;
    const welcome = 'Welcome back to the workspace!';


    return (
        <div className={_needWrapper}>
            <div className={_slogan}>
                <span>{greeting}</span>
                <br />
                <span>{welcome}</span>
            </div>
            <div className={_image}></div>
        </div>
    );
}

export default Slogan;