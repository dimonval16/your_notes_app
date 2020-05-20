import React from 'react';
import Icon from "../../../Buttons/Icon/Icon";
import Acc from "../Account.module.css";
import PhotoSetter from "./PhotoSetter";

export default function SettingMenu(props) {
    const _cancel = Acc.cancel;
    const _wrapperSetting = Acc.wrapperSetting;
    const _setParams = Acc.setParams;

    return (
        <div className={props.className}>
            <div className={_wrapperSetting}>
                <span>Setting menu</span>
                <Icon
                    className={_cancel}
                    icon={'close'}
                    onClick={props.onClose}
                />
            </div>
            <ul className={_setParams}>
                <li>
                    <PhotoSetter
                        file={props.file}
                        onHandleSelectFile={props.onHandleSelectFile}
                        onSendPhoto={props.onSendPhoto}
                    />
                </li>
                <li>Change name</li>
                <li>Change password</li>
                <li onClick={props.onHandleLogOut}>Log out</li>
            </ul>
        </div>
    );
}