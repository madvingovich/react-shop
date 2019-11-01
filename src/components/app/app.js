import React, { Component } from 'react';

import Header from '../header';

import { HomePage, CartPage } from '../pages';

import { Switch, Route } from 'react-router-dom';

import './app.css';

class App extends Component {
    render() {        
        return (
            <main role="main" className="app">
                <Header numItems={3} total={454} />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/cart" exact component={CartPage} />
                    </Switch>
                </div>
            </main>
        );
    }
};

export default App;