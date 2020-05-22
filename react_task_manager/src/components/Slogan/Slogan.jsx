import React from 'react';
import SloganStyle from './Slogan.module.css';
import Preloader from "../Preloader/Preloader";

export default function Slogan(props) {
    const _wrapperVisible = SloganStyle.wrapperVisible;
    const _wrapperHidden = SloganStyle.wrapperHidden
    const _slogan = SloganStyle.slogan;
    const _image = SloganStyle.image;

    return (
        <div className={props.sloganHidden ? _wrapperHidden : _wrapperVisible}>
            <div className={_slogan}>
                {props.fetching ?
                    <Preloader/>
                    :
                    <span>{`Hi, ${props.userName}`}</span>
                }
                <br />
                <span>Welcome back to the workspace!</span>
            </div>
            <div className={_image} />
        </div>
    );
}