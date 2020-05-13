import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from './LoginForm.module.css';

export default function LoginForm(props) {
    const _wrapper = LoginStyles.wrapper;
    const _staticWord = LoginStyles.staticWord;
    const _itemStyle = LoginStyles.itemStyle;
    const _buttons = LoginStyles.buttons;
    const _input = LoginStyles.input;
    const _googleIcon = LoginStyles.googleIcon;
    const _googleBlock = LoginStyles.googleBlock;
    const _registered = LoginStyles.registered;

    function handleGoogleButton(e) {
        e.preventDefault();
        console.log('Google Login Click');
    }

    function handleEmailInput(e) {
        const inputText = e.target.value;

        props.onEmailInputChange(inputText);
    }

    function handlePasswordInput(e) {
        const inputText = e.target.value;

        props.onPasswordInputChange(inputText);
    }

    function handleLoginButton(e) {
        e.preventDefault();
        const url = 'https://damp-headland-57051.herokuapp.com/api/v1/signin';
        const data = {
            email: props.loginForm.email,
            password: props.loginForm.pass
        }
        const history = props.history;

        props.onLogin(url, data, history);
    }

    return (
        <div>
            <form className={_wrapper}>
                <button
                    className={`${_itemStyle} ${_buttons} ${_googleBlock}`}
                    onClick={handleGoogleButton}
                >
                    <div className={_googleIcon}></div>
                    <div>Log in with Google</div>
                </button>
                <span className={_staticWord}>or</span>
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='text'
                    placeholder='Email'
                    value={props.loginForm.email}
                    onChange={handleEmailInput}
                />
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='password'
                    placeholder='Password'
                    value={props.loginForm.pass}
                    onChange={handlePasswordInput}
                />
                <button
                    className={`${_itemStyle} ${_buttons}`}
                    onClick={handleLoginButton}
                >
                   Log in
                </button>
                <div className={_registered}>Forgot password?</div>
                <Link to='/signup' className='link'>
                    <div className={_registered}>Create account</div>
                </Link>
            </form>
        </div>
    );
}