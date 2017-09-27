import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome, LoginHome } from './components';
import { me, fetchUser } from './redux/user';

const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id){
        replace('/loginHome');
        next();
      }
      return user;
    })
    .then((user) => {
      return store.dispatch(fetchUser(user))
    })
    .then(() => next())
    .catch(console.error.bind(console));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Main} />
          <Route onEnter={requireLogin}>
            <Route path="home" component={UserHome} />
            <Route path="history" onEnter={loadHistory} component={History} />
          </Route>
          <Route path="loginHome" component={ LoginHome } />
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
        <IndexRedirect to="home" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
