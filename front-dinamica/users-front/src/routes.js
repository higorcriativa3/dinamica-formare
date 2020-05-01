import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Import routes
import Login from './pages/login';
import Messages from './pages/messages';
import AdminMessages from './pages/adminMessages';
import AdminLogin from './pages/adminLogin';

//Set routes
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/messages' component={Messages}></Route>
        <Route path='/adminMessages' component={AdminMessages}></Route>
        <Route path='/admin' component={AdminLogin}></Route>
      </Switch>
    </BrowserRouter>
  )
}