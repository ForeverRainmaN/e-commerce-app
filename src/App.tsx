import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router";

import HomePage from "./pages/home/HomePage"
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage";
import {auth, createUserProfileDocument, Unsubscribe} from './firebase/firebase.utils';

import './App.css';
import {User} from "./common/types";

const App = () => {
    const [currentUser, setCurrentUser] = useState<User>(null);

    useEffect(() => {
        const unsubscribe: Unsubscribe =
            auth.onAuthStateChanged(async userAuth => {
                    if (userAuth) {
                        const userRef = await createUserProfileDocument(userAuth);

                        userRef?.onSnapshot(snapShot => {
                            setCurrentUser({
                                id: snapShot.id,
                                ...snapShot.data()
                            })
                        })
                    } else {
                        setCurrentUser(userAuth)
                    }
                }
            );
        return () => unsubscribe();
    }, []);
    return (
        <div className="App">
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path={'/signin'} component={SignInAndSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
