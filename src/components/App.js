import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LoginContainer from '../components/LoginContainer'
import RegisterContainer from './RegisterContainer'
import UserContainer from './UserContainer';
import ResourcesContainer from './ResourcesContainer';

const App = () =>(
    <BrowserRouter>
        <Route exact path="/" render={() => (
        <Redirect to="/login"/>
        )}/>
        <Route exact path= "/login" component={LoginContainer} />
        <Route exact path= "/register" component={RegisterContainer} />
        <Route exact path= "/user" component={UserContainer} />
        <Route exact path= "/resources" component={ResourcesContainer} />
    </BrowserRouter>
)

export default App