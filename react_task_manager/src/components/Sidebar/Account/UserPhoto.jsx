import React from 'react';
import Acc from "./Account.module.css";

export default function UserPhoto({image}) {
    const _userPhoto = Acc.userPhoto;
    const _imageStyle = Acc.imageStyle;

    return (
        image === 'account_circle' ?
            <div className={`material-icons ${_userPhoto}`}>
                {image}
            </div>
            :
            <img
                className={_imageStyle}
                src={"data:image/jpg;base64," + image}
                alt={''}
            />
    );
}