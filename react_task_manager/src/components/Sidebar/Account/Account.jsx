import React from 'react';
import Acc from './Account.module.css';

export default function Account(props) {
    const _wrapper = Acc.wrapper;
    const userPhoto = props.user.photo;
    const userName = props.user.name;

    return (
        <div className={_wrapper}>
            <div className="material-icons">{userPhoto}</div>
            <div>
                {userName}
            </div>
        </div>
    );
}