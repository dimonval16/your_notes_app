import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginFormContainer";
import SignUpPage from "./pages/SignUpPage/SignUpFormContainer";

const PrivateRoute = ({component: Component, path, redirect, ...rest}) => {
    const isToken = localStorage.getItem('accessToken');

    return (
        <Route
            {...rest}
            exact
            path={path}
            render={props => isToken ? <Component {...props}/> : <Redirect to={redirect}/>}
        />
    );
}

function App(props) {
    const {history, isAuth} = props;
    const isToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (isToken) {
            history.push('/main');
            console.log('User login');
        } else {
            history.push('/signin');
            console.log('User log out');
        }
    }, [isAuth, history, isToken])

    return (
        <Switch>
            <PrivateRoute
                path={'/main'}
                redirect={'/signin'}
                component={MainPage}
            />
            <Route path={'/signin'} exact component={LoginPage}/>
            <Route path={'/signup'} exact component={SignUpPage}/>
            <Redirect from={'/'} to={'/main'}/>
        </Switch>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.authorized.status
    }
}

export default connect(mapStateToProps)(withRouter(App));