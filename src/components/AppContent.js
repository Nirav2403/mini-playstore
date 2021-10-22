import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import AppLive from './AppLive';
import Navigation from './Navigation';

const AppContent = (props) => {
    return (
        <div className="app-container">
            <Navigation {...props} />
            <Switch>
                <Route exact path="/:datatype" render={(p)=> <AppLayout  {...props} {...p} />} /> 
                <Route exact path="/:datatype/:video" render={(p)=> <AppLive  {...props}{...p} />} /> 
            </Switch>
        </div>
    )
}

export default AppContent;
