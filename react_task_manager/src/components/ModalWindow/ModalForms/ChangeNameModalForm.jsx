import React, {useEffect, useState} from "react";
import FormsInput from "../../Forms/FormsInput/FormsInput";
import sModWin from "../ModalWindow.module.css";

export default function ChangeNameModalForm(props) {
    const [newName, setNewName] = useState('');

    useEffect(() => {
        setNewName('');
    }, [props.status]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onChangeName(newName);
        setNewName('');
    }

    return (
        <form className={sModWin.wrapperChangeName} onSubmit={handleSubmit}>
            <FormsInput
                type={'text'}
                placeholder={'New name'}
                value={newName}
                maxLength={'16'}
                onChange={e => setNewName(e.target.value)}
            />
            <FormsInput
                type={'submit'}
                value={'Submit'}
            />
        </form>
    );
}