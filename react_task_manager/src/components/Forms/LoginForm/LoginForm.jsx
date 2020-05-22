import React from "react";
import {Link} from "react-router-dom";
import sLogin from "./LoginForm.module.css";
import FormsInput from "../FormsInput/FormsInput";
import AppTitle from "../../AppTitle/AppTitle";
import Preloader from "../../Preloader/Preloader";

export default function LoginForm(props) {
    const _wrapper = sLogin.wrapper;
    const _registered = sLogin.registered;
    const _linkWrapper = sLogin.linkWrapper;
    const _errHid = sLogin.errHid;
    const _errVis = sLogin.errVis;

    return (
        <form className={_wrapper} onSubmit={props.onHandleLoginSubmit}>
            <AppTitle/>
            <FormsInput
                type='email'
                placeholder='Email'
                value={props.email}
                onChange={props.onHandleEmailInput}
            />
            <FormsInput
                type='password'
                placeholder='Password'
                minLength={'6'}
                value={props.pass}
                onChange={props.onHandlePasswordInput}
            />
            {props.fetching ?
                <Preloader />
                :
                <span className={props.err ? _errVis : _errHid}>{props.err}</span>
            }
            <FormsInput
                type={'submit'}
                value={'Log in'}
            />
            <div className={_linkWrapper}>
                <span className={_registered}>
                    Forgot password?
                </span>
                <Link to='/signup' className={`link ${_registered}`}>
                    Create account
                </Link>
            </div>
        </form>
    );
}