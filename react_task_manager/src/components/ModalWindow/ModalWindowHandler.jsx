import React from "react";
import ModalWindow from "./ModalWindow";

export default function (props) {
    function handleOk() {
        const reason = props.modalWindowData.reason;

        if (reason === 'SignUp success.') {
            props.onSignUp();
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