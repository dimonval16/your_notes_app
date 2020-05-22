import React, { useState } from 'react';
import Acc from './Account.module.css';
import Icon from "../../Buttons/Icon/Icon";
import SettingMenuHandler from "./PhotoSettings/SettingMenuHandler";
import UserPhoto from "./UserPhoto";
import Preloader from "../../Preloader/Preloader";

export default function Account(props) {
    const _wrapper = Acc.wrapper;
    const _wrapperUser = Acc.wrapperUser;
    const _settings = Acc.settings;
    const _userName = Acc.userName;
    const _menu = Acc.menu;
    const _menuActive = Acc.menuActive;

    const [showMenu, setShowMenu] = useState(false);

    function handleSetPhoto(file) {
        setShowMenu(false);
        props.onSetPhoto(file);
    }

    return (
        <div className={_wrapper}>
            <SettingMenuHandler
                modalWindow={props.modalWidow}
                className={showMenu ? _menuActive : _menu}
                onClose={() => setShowMenu(false)}
                onSetPhoto={handleSetPhoto}
                onModalWindow={props.onModalWindow}
            />
            <Icon
                className={_settings} icon={'settings'}
                onClick={() => setShowMenu(true)}
            />
            <div className={_wrapperUser}>
                <UserPhoto image={props.user.photo}/>
                {props.fetching ?
                    <Preloader/>
                    :
                    <div className={_userName}>{props.user.name}</div>
                }
            </div>
        </div>
    );
}