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

    return (
        <SettingMenu
            className={props.className}
            file={file}
            onClose={handleClose}
            onHandleSelectFile={handleSelectFile}
            onSendPhoto={handleSendPhoto}
            onHandleLogOut={activateModalWindow}
        />
    );
}