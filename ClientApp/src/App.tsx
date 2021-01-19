import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from "./components/Profile";
import './custom.css'
import Companies from "./components/Companies";

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/companies' component={Companies} />
    </Layout>
);
