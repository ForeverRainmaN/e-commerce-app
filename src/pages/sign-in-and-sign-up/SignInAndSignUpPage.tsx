import React, {FC} from 'react';
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import './sign-in-and-sign-up.scss'

const SignInAndSignUpPage: FC = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>

    )
}

export default SignInAndSignUpPage