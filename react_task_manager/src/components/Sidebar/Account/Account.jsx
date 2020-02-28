import React from 'react';
import Acc from './Account.module.css';

const Account = (props) => {
    let _wrapper = Acc.wrapper;
    let userPhoto = props.user.photo;
    let userName = props.user.name;
    let userSurname = props.user.surname;

    return(
        <div className={_wrapper}>
            <div className="material-icons">{userPhoto}</div>
            <div>
                {`${userName} ${userSurname}`}
            </div>
        </div>
    );
}

export default Account;