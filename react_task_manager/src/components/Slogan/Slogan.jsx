import React from 'react';
import Slogan_style from './Slogan.module.css';

const Slogan = (props) => {
    return(
        <div className={Slogan_style.wrapper}>
            <div className={Slogan_style.slogan}>
                <span>Hi, Dimas </span> 
                <br/>
                <span>Welcome back to the workspace!</span>
            </div>
            <div className={Slogan_style.image}>
            </div>
        </div>
    );
}

export default Slogan;