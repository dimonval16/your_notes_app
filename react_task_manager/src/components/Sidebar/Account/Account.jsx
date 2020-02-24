import React from 'react';
import Acc from './Account.module.css';

const Account = (props) => {
    
    return(
        <div className={Acc.wrapper}>
            <div className="material-icons">{props.user.photo}</div>
            <div>
                {`${props.user.name} ${props.user.surname}`}
            </div>
        </div>
    );
}

export default Account;