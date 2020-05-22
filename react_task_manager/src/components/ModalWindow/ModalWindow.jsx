import React from "react";
import sModWin from './ModalWindow.module.css';
import Icon from "../Buttons/Icon/Icon";

export default function ModalWindow(props) {

    return (
        <div className={props.modalWindowData.status ? sModWin.wrapper : sModWin.wrapperHid}>
            <div className={sModWin.wrapperContent}>
                <Icon
                    className={props.modalWindowData.reason === 'log out' ? sModWin.close : sModWin.closeHid}
                    icon={'close'}
                    onClick={props.onCloseWindow}
                />
                <div className={sModWin.content}>
                    {props.modalWindowData.title}
                </div>
                <Icon
                    className={sModWin.buttons}
                    text={'Ok'}
                    onClick={props.onOk}
                />
            </div>
        </div>
    );
}