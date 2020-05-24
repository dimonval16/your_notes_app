import React, {useEffect, useState} from "react";
import FormsInput from "../../Forms/FormsInput/FormsInput";
import sModWin from "../ModalWindow.module.css";

export default function ChangePassModalForm(props) {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    useEffect(() => {
        setOldPass('');
        setNewPass('');
        setConfirmPass('');
    }, [props.status]);

    function handleSubmit(e) {
        e.preventDefault();

        if (newPass === confirmPass) {
            const data = {
                confirmNewPassword: confirmPass,
                newPassword: newPass,
                oldPassword: oldPass
            }
            props.onChangePass(data);
        }
    }

    return (
        <form className={sModWin.wrapperForm} onSubmit={handleSubmit}>
            <FormsInput
                type={'password'}
                placeholder={'Old password'}
                value={oldPass}
                minLength={'6'}
                onChange={e => setOldPass(e.target.value)}
            />
            <FormsInput
                type={'password'}
                placeholder={'New password'}
                value={newPass}
                minLength={'6'}
                onChange={e => setNewPass(e.target.value)}
            />
            <FormsInput
                type={'password'}
                placeholder={'Confirm new password'}
                value={confirmPass}
                minLength={'6'}
                onChange={e => setConfirmPass(e.target.value)}
            />
            <span className={newPass === confirmPass ? sModWin.errorMesHid : sModWin.errorMes}>
                Passwords are not equal.
            </span>
            <FormsInput
                type={'submit'}
                value={'Submit'}
            />
        </form>
    );
}