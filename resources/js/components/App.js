import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './web/Home';
import About from './web/About';
import Contact from './web/Contact';
import Category from './categories/Index';
import Editcategory from './categories/Editcategory';
import Error404 from './web/Error404';

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
                                <Route path='/categories/:id/edit' exact component={Editcategory}/>
                                <Route path='/about' exact component={About}/>
                                <Route path='/contact-us' exact component={Contact}/>
                                <Route path='/*' component={Error404}/>
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
