import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MainApplication from "./components/MainApplication/MainApplication";
import LoginFormContainer from "./containers/LoginFormContainer";
import RegFormContainer from "./containers/RegFormContainer";


const PrivateRoute = ({component: Component, path, redirect, isAuth, ...rest}) => {
    const isToken = localStorage.getItem('accessToken');

    return (
        <Route
            {...rest}
            exact
            path={path}
            render={props => isToken && isAuth ? <Component {...props}/> : <Redirect to={redirect}/>}
        />
    );
}

class App extends React.Component {

    componentDidUpdate(prevProps) {
        const isAuthorize = !prevProps.isAuth && this.props.isAuth;
        const isLogOut = prevProps.isAuth && !this.props.isAuth;
        const { history } = this.props;

        if(isAuthorize) {
            history.push('/main');
            console.log('user Login');
        } else if (isLogOut) {
            history.push('/signin');
            console.log('user Logout');
        }
    }

    render() {
        return (
            <Switch>
                <PrivateRoute
                    path={'/main'}
                    redirect={'/signin'}
                    isAuth={this.props.isAuth}
                    component={MainApplication}
                />
                <Route path={'/signin'} exact component={LoginFormContainer}/>
                <Route path={'/signup'} exact component={RegFormContainer}/>
                <Redirect from={'/'} to={'/main'}/>
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.authorized.status
    }
}

export default connect(mapStateToProps)(withRouter(App));