import React from 'react';
import Acc from './Account.module.css';

export default function Account(props) {
    const _wrapper = Acc.wrapper;
    const userPhoto = props.user.photo;
    const userName = props.user.name;
    const userSurname = props.user.surname;

    return (
        <div className={_wrapper}>
            <div className="material-icons">{userPhoto}</div>
            <div>
                {`${userName} ${userSurname}`}
            </div>
        </div>
    );
}