import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import CharDetail from './components/characters/CharDetail';

export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/:id" component={CharDetail} />
        </Switch>
    )
};