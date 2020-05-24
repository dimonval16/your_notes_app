import React from "react";
import ChangeNameModalForm from "./ChangeNameModalForm";
import ChangePassModalForm from "./ChangePassModalForm";

export default function ModalForm(props) {
    const isReasonChangeName = props.reason === 'Change name';

    return isReasonChangeName ?
        <ChangeNameModalForm
            status={props.status}
            onChangeName={props.onModalSubmit}
        />
        :
        <ChangePassModalForm
            status={props.status}
            onChangePass={props.onModalSubmit}
        />;
}