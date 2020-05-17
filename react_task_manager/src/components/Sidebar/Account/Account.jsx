import React, { useState } from 'react';
import Acc from './Account.module.css';
import Icon from "../../Buttons/Icon/Icon";
import SettingMenu from "./SettingMenu";

export default function Account(props) {
    const _wrapper = Acc.wrapper;
    const _wrapperUser = Acc.wrapperUser;
    const _settings = Acc.settings;
    const _userPhoto = Acc.userPhoto;
    const _userName = Acc.userName;
    const _menu = Acc.menu;
    const _menuActive = Acc.menuActive;
    const userPhoto = <img src={"data:image/jpg;base64," + props.user.photo} width={'132px'}/>;

    const [showMenu, setShowMenu] = useState(false);
debugger
    console.log(props.user)

    return (
        <div className={_wrapper}>
            <SettingMenu
                className={showMenu ? _menuActive : _menu}
                onClose={() =>  setShowMenu(false)}
                onLogOut={props.onLogOut}
                onSetPhoto={props.onSetPhoto}
            />
            <Icon
                className={_settings} icon={'settings'}
                onClick={() => setShowMenu(true)}
            />
            <div className={_wrapperUser}>
                <div className={`material-icons ${_userPhoto}`}>{props.user.photo}</div>
                <div className={_userName}>
                    {props.user.name}
                </div>
            </div>
        </div>
    );
}