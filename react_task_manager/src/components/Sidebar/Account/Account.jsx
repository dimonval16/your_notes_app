import React from 'react';
import Acc from './Account.module.css'

const Account = (props) => {
    
    return(
        <div className={Acc.wrapper}>
            <div className="material-icons">account_circle</div>
            <div>
                {props.user}
            </div>
        </div>
    );
}

export default Account;