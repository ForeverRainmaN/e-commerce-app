import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router";

import HomePage from "./pages/home/HomePage"
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";
import {auth, Unsubscribe, User} from './firebase/firebase.utils';

import './App.css';

const App = () => {
    const [, setCurrentUser] =
        useState<{ currentUser: null | User }>({currentUser: null})

    useEffect(() => {
        const unsubscribe: Unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser({currentUser: user})
        })
        return () => unsubscribe()
    }, []);

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

