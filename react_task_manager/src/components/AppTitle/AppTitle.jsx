import React from "react";
import logo from "../../img/logo_un_i.svg";
import sTitle from './AppTitle.module.css';

export default function AppTitle() {
    const _logo = sTitle.logo;
    const _logoImg = sTitle.logoImg;

    return (
        <div className={_logo}>
            <img className={_logoImg} src={logo} alt={''} />
            <span>Your notes</span>
        </div>
    );
}