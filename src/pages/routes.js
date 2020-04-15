import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import About from './About/index';
import Todos from './Todo/index';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/todos" component={Todos} />
                <Redirect path="*" to="/todos" />
            </Switch>
        </BrowserRouter>
    );
}