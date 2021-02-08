import React, { Component } from 'react';
import React, {Components} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Cafe from './components/Cafe';
import Home from './components/Home';
import Library from './components/Library';

export default class App extends Component {
    render() {
        return (
           <Router>
               <div>
                   <Switch>
                       <Route exact path= "/" component= {Home} />
                       <Route exact path= "/Home" component= {Home} />
                       <Route exact path="/cafe" component= {Cafe} />
                       <Route exact path = "/library" component= {Library} />
                   </Switch>
               </div>
           </Router>
        )
    }
}
