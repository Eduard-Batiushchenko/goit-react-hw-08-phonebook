import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import route from './rotes/routes';

import Home from './Pages/Home/Home';
import ContactsPage from './Pages/Contacts/ContactsPage';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path={route.home} component={Home} />
          <Route path={route.contacts} component={ContactsPage} />
          <Route path={route.login} component={Login} />
          <Route path={route.registration} component={Registration} />
          <Redirect to={route.home} />
        </Switch>
      </>
    );
  }
}

export default App;
