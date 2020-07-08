import React from 'react'
import useStyles from "./styles";
import { Switch, Route } from 'react-router';
import Dashboard from '../../pages/dashboard/Dashboard';
import { CssBaseline } from '@material-ui/core';
import Appbar from '../Appbar/Appbar';
export default function Layout() {
    var classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <>
                <Switch>
                    <Route path="/app/dashboard" component={Appbar}></Route>
                </Switch>
            </>
        </div>
    )
}
