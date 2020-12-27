import React from 'react';
import {Route, Switch} from "react-router";

import HomePage from "./pages/home/HomePage"
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";

import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path={'/signin'} component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;

