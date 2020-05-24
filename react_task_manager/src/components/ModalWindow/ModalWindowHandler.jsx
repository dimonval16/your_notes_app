import React from "react";
import ModalWindow from "./ModalWindow";

export default function (props) {
    function handleOk(data) {
        const reason = props.modalWindowData.reason;

        if (reason === 'SignUp success.') {
            props.onSignUp();
        } else if (reason === 'Conflict') {
            props.onCloseWindow();
        } else if (reason === 'Not Found') {
            props.onCloseWindow();
        } else if (reason === 'Change password') {
            props.onCloseWindow();
            props.onChangePass(data);
        } else if (reason === 'Change name') {
            props.onCloseWindow();
            props.onChangeName(data);
        } else if (reason === 'Bad Request') {
            props.onCloseWindow();
        } else if (reason === 'Pass changed') {
            props.onCloseWindow();
        } else {
            props.onLogOut();
        }
    }

    return (
        <ModalWindow
            modalWindowData={props.modalWindowData}
            onCloseWindow={props.onCloseWindow}
            onOk={handleOk}
        />
    );
}