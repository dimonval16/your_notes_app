import React, {useState} from "react";
import SettingMenu from "./SettingMenu";

export default function SettingMenuHandler(props) {
    const [file, setFile] = useState(null);

    function handleSendPhoto() {
        if (file) {
            props.onSetPhoto(file);
            setFile(null);
        }
    }

    function handleSelectFile(e) {
        const getPhoto = e.target.files[0];
        setFile(getPhoto);
    }

    function handleClose() {
        props.onClose();
        setFile(null);
    }

    function activateModalWindow() {
        const title = 'Are you sure?';
        const reason = 'log out';

        props.onModalWindow(title, reason);
    }

    function handleChangePass() {
        const title = 'Change password';
        const reason = 'Change password';

        props.onModalWindow(title, reason);
    }

    function handleChangeName() {
        const title = 'Change name';
        const reason = 'Change name';

        props.onModalWindow(title, reason);
    }

    return (
        <SettingMenu
            className={props.className}
            file={file}
            onClose={handleClose}
            onHandleSelectFile={handleSelectFile}
            onSendPhoto={handleSendPhoto}
            onHandleLogOut={activateModalWindow}
            onChangePass={handleChangePass}
            onChangeName={handleChangeName}
        />
    );
}