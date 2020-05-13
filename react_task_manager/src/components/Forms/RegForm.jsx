import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationStyles from './RegistrationForm.module.css';

export default function RegForm(props) {
    const _wrapper = RegistrationStyles.wrapper;
    const _staticWord = RegistrationStyles.staticWord;
    const _itemStyle = RegistrationStyles.itemStyle;
    const _buttons = RegistrationStyles.buttons;
    const _input = RegistrationStyles.input;
    const _googleIcon = RegistrationStyles.googleIcon;
    const _googleBlock = RegistrationStyles.googleBlock;
    const _registered = RegistrationStyles.registered;

    function handleGoogleButton(e) {
        e.preventDefault();
        console.log('Google Registration Click');
    }

    function handleRegEmailInput(e) {
        const inputText = e.target.value;

        props.onEmailRegInputChange(inputText);
    }

    function handleNameInput(e) {
        const inputText = e.target.value;

        props.onNameRegInputChange(inputText);
    }

    function handlePasswordInput(e) {
        const inputText = e.target.value;

        props.onPasswordRegInputChange(inputText);
    }

    function handleConfirmPasswordInput(e) {
        const inputText = e.target.value;

        props.onPasswordConfirmInputChange(inputText);
    }

    function handleSignUpButton(e) {
        e.preventDefault();
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
                    value={props.regForm.email}
                    onChange={handleRegEmailInput}
                />
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='text'
                    placeholder='Name'
                    value={props.regForm.name}
                    onChange={handleNameInput}
                />
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='password'
                    placeholder='Password'
                    value={props.regForm.pass}
                    onChange={handlePasswordInput}
                />
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='password'
                    placeholder='Confirm Password'
                    value={props.regForm.confirmPass}
                    onChange={handleConfirmPasswordInput}
                />
                <button
                    className={`${_itemStyle} ${_buttons}`}
                    onClick={handleSignUpButton}
                >
                    Sign up
                </button>
                <Link to='/signin' className='link'>
                    <div className={_registered}>Have account? Sign In</div>
                </Link>
            </form>
        </div>
    );
}