import React from "react";
import sModWin from './ModalWindow.module.css';
import Icon from "../Buttons/Icon/Icon";
import ModalForm from "./ModalForms/ModalForm";

export default function ModalWindow(props) {
    const reasonLogOut = props.modalWindowData.reason === 'log out';
    const reasonChangePass = props.modalWindowData.reason === 'Change password';
    const reasonChangeName = props.modalWindowData.reason === 'Change name';

    return (
        <div className={props.modalWindowData.status ? sModWin.wrapper : sModWin.wrapperHid}>
            <div className={sModWin.wrapperContent}>
                <Icon
                    className={reasonLogOut || reasonChangePass || reasonChangeName ? sModWin.close : sModWin.closeHid}
                    icon={'close'}
                    onClick={props.onCloseWindow}
                />
                {reasonChangePass || reasonChangeName ?
                    <ModalForm
                        reason={props.modalWindowData.reason}
                        status={props.modalWindowData.status}
                        onModalSubmit={props.onOk}
                    />
                    :
                    <>
                        <div className={sModWin.content}>
                            {props.modalWindowData.title}
                        </div>
                        <Icon
                            className={sModWin.buttons}
                            text={'Ok'}
                            onClick={props.onOk}
                        />
                    </>
                }
            </div>
        </div>
    );
}