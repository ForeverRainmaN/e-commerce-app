import React, {FC} from 'react'
import FormInput from "../form-input/FormInput";

import {FormValues} from "../../common/types";
import useForm from "../../hooks/useForm";

import CustomButton from "../custom-button/CustomButton";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.scss'

interface SignUpFormValues extends FormValues {
    displayName: string,
    confirmPassword: string
}

const initialValues: SignUpFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp: FC = () => {
    const {
        values: {
            displayName,
            email,
            password,
            confirmPassword
        },
        handleChange,
        handleSubmit,
    } = useForm<SignUpFormValues>(
        initialValues,
        async (values) => {
            if (password !== confirmPassword) {
                alert('passwords dont match');
                return;
            }
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName})
            } catch (error) {
                console.log('error creating user with Email and Password', error)
            }
        }
    );
    return (
        <div className="sign-up">
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    value={displayName}
                    name='displayName'
                    type='text'
                    label='Display Name'
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    value={email}
                    name='email'
                    type='email'
                    label='Email'
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    value={password}
                    name='password'
                    type='password'
                    label='Password'
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    value={confirmPassword}
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    required
                    handleChange={handleChange}
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;