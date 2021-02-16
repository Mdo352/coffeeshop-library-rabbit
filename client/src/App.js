import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from './actions';
import { routes } from './constants';


// Styles
// import { CssBaseline } from '@material-ui/core';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/App.css';

// Static/Stateless
import {
    NavBar,
    Home,
    Cafe,
    Footer,
    Library
} from './components';


import {
    ItemInsert,
    ItemsList,
    ItemsTable,
    ItemUpdate
} from './pages/index';

class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.MENU} component={Cafe} />
                <Route exact path={routes.ITEMS} component={ItemsList} />
                <Route exact path={`${routes.ITEMS}/react-table-v6`} component={ItemsTable} />
                <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />
                <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
            </Switch>
        );

        return (
            <Router>
                {/* <CssBaseline /> */}
                <NavBar />
                <div className="app--main">
                    {/* <PageLayout /> */}
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
                <Footer />
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
