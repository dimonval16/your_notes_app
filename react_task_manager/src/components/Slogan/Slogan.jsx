import React from 'react';
import Slogan_style from './Slogan.module.css';

const Slogan = (props) => {
    let _wrapper = Slogan_style.wrapper;
    let _slogan = Slogan_style.slogan;
    let _image = Slogan_style.image;
    let greeting = `Hi, ${props.sloganName}`;
    let welcome = 'Welcome back to the workspace!';

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