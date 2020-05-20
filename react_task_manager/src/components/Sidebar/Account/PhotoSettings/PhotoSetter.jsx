import React from "react";
import Acc from "../Account.module.css";
import Icon from "../../../Buttons/Icon/Icon";

export default function PhotoSetter(props) {
    const _addPhoto = Acc.addPhoto;
    const _addPhotoHidden = Acc.addPhotoHidden;
    const _inputFile = Acc.inputFile;
    const _addPhotoWrapper = Acc.addPhotoWrapper;

    return (
        <div className={_addPhotoWrapper}>
            <label className={Acc.label}>
                Change photo
                <input
                    id={'uploader'}
                    className={_inputFile}
                    type={'file'}
                    accept={'image/jpeg,image/png,image/jpg'}
                    onChange={props.onHandleSelectFile}
                />
            </label>
            <Icon
                className={props.file ? _addPhoto : _addPhotoHidden}
                icon={'save'}
                onClick={props.onSendPhoto}
            />
        </div>
    );
}