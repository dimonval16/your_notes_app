import React from 'react';
import Header_style from './Header.module.css'

const slideUp = () => {
    const slogan = document.querySelector('.slogan');
    slogan.style.position = 'absolute';
    slogan.style.top = '-500px';

    const appBlock = document.querySelector('.App');
    appBlock.style.gridTemplateRows = '50px 1fr';

}

const slideDown = () => {
    const slogan = document.querySelector('.slogan');
    slogan.style.position = 'static';
    slogan.style.top = '0';

    const appBlock = document.querySelector('.App');
    appBlock.style.gridTemplateRows = '50px 1fr 3fr';
}

const Header = (props) => {
    return(
        <div className={Header_style.wrapper}>
            <div></div>
            <div className={Header_style.arrows}>
                <i className={`material-icons arrowUp`} onClick={slideUp}>keyboard_arrow_up</i>
                <i className={`material-icons arrowDown`} onClick={slideDown}>keyboard_arrow_down</i>
            </div>
        </div>
    );
}

export default Header;