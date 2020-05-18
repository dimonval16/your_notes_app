import React, {useState} from "react";
import Icon from "../../Buttons/Icon/Icon";
import Acc from "./Account.module.css";

export default function SettingMenu(props) {
    const _cancel = Acc.cancel;
    const _wrapperSetting = Acc.wrapperSetting;
    const _setParams = Acc.setParams;
    const _addPhotoWrapper = Acc.addPhotoWrapper;
    const _addPhoto = Acc.addPhoto;
    const _addPhotoHidden = Acc.addPhotoHidden;
    const _inputFile = Acc.inputFile;

    const [file, setFile] = useState(null);

    function sendPhoto() {
        if(file) {
            props.onSetPhoto(file);
            setFile(null);
        }
    }

    function handleSelectFile(e) {
        const getPhoto = e.target.files[0];

        setFile(getPhoto);
    }

    function handleLogOut() {
        const isSure = window.confirm('Are you sure?')

        if(isSure) {
            props.onLogOut();
        }
    }

    return (
        <div className={props.className}>
            <div className={_wrapperSetting}>
                Setting menu
                <Icon
                    className={_cancel}
                    icon={'close'}
                    onClick={props.onClose}
                />
            </div>
            <div className={_setParams}>
                <ul>
                    <li className={_addPhotoWrapper}>
                        <label className={Acc.label}>
                            Change photo
                            <input
                                id={'uploader'}
                                className={_inputFile}
                                type={'file'}
                                accept={'image/jpeg,image/png,image/jpg'}
                                onChange={handleSelectFile}
                            />
                        </label>
                        <Icon
                            className={file ? _addPhoto : _addPhotoHidden}
                            icon={'save'}
                            onClick={sendPhoto}
                        />
                    </li>
                    <li>Change name</li>
                    <li>Change password</li>
                    <li onClick={handleLogOut}>Log out</li>
                </ul>
            </div>
        </div>
    );
}