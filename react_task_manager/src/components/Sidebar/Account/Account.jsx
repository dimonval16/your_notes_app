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
    const _imageStyle = Acc.imageStyle;

    const [showMenu, setShowMenu] = useState(false);

    function handleSetPhoto(file) {
        setShowMenu(false);
        props.onSetPhoto(file);
    }

    function renderPhoto() {
        if (props.user.photo === 'account_circle') {
            return <div className={`material-icons ${_userPhoto}`}>{props.user.photo}</div>
        } else {
            return <img className={_imageStyle} src={"data:image/jpg;base64," + props.user.photo} alt={''}/>
        }
    }

    return (
        <div className={_wrapper}>
            <SettingMenu
                className={showMenu ? _menuActive : _menu}
                onClose={() => setShowMenu(false)}
                onLogOut={props.onLogOut}
                onSetPhoto={handleSetPhoto}
            />
            <Icon
                className={_settings} icon={'settings'}
                onClick={() => setShowMenu(true)}
            />
            <div className={_wrapperUser}>
                {renderPhoto()}
                <div className={_userName}>
                    {props.user.name}
                </div>
            </div>
        </div>
    );
}