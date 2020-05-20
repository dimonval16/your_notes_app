import React, {useState} from "react";
import SettingMenu from "./SettingMenu";

export default function SettingMenuHandler(props) {
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

    function handleClose() {
        props.onClose();
        setFile(null);
    }

    function handleLogOut() {
        const isSure = window.confirm('Are you sure?')

        if(isSure) {
            props.onLogOut();
        }
    }

    return (
        <SettingMenu
            className={props.className}
            file={file}
            onClose={handleClose}
            onHandleSelectFile={handleSelectFile}
            onSendPhoto={sendPhoto}
            onHandleLogOut={handleLogOut}
        />
    );
}