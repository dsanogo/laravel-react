import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './web/Home';
import About from './web/About';
import Contact from './web/Contact';
import Category from './categories/Index';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <div className="card">
                        <div className="card-body">
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/categories' exact component={Category}/>
                                <Route path='/about' component={About}/>
                                <Route path='/contact-us' component={Contact}/>
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
            
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
