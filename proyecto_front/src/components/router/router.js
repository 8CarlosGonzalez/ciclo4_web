import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';

import Login from "../login/login";
import empleados from '../empleados/empleados.buscar';

export default function AppRouter(){
        return ( 
        <Router>
            <Switch>
                <Route exact path={['/login']} component={Login}/>
                <PrivateRoute exact path="/empleados" component={empleados}/>
            </Switch>
        </Router>);
}
