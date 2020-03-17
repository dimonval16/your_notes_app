import React from 'react';
import Slogan_style from './Slogan.module.css';

const Slogan = (props) => {
    const user = props.store.getState().user;
    const _wrapper = Slogan_style.wrapper;
    const _slogan = Slogan_style.slogan;
    const _image = Slogan_style.image;
    let greeting = `Hi, ${user.name}`;
    const welcome = 'Welcome back to the workspace!';

    return (
        <div className={_wrapper} ref={props.sloganRef}>
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