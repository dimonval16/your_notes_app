import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MainApplication from "./components/MainApplication/MainApplication";
import LoginFormContainer from "./containers/LoginFormContainer";
import RegFormContainer from "./containers/RegFormContainer";

const PrivateRoute = ({component: Component, path, isAuth, ...rest}) => {
    const isToken = localStorage.getItem('accessToken');
    console.log('Private Route')

    return (
        <Route
            {...rest}
            exact
            path={path}
            render={props => isToken ? <Component {...props}/> : <Redirect to={'/signin'}/>}
        />
    );
}

function App(props) {
    return (
        <Switch>
            <PrivateRoute
                path={'/main'}
                isAuth={props.isAuth}
                component={MainApplication}
            />
            <Route path={'/signin'} exact component={LoginFormContainer}/>
            <Route path={'/signup'} exact component={RegFormContainer}/>
            <Redirect from={'/'} to={props.isAuth ? '/main' : '/signin'} />
        </Switch>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.loginForm.isAuth
    }
}

export default connect(mapStateToProps)(withRouter(App));