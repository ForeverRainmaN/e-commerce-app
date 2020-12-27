import React, {FC} from 'react';

import useForm from "../../hooks/useForm";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./sign-in.scss";

interface FormValues {
    email: string,
    password: string
}

const initialValues: FormValues = {
    email: '',
    password: ''
}

const SignIn: FC = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useForm(
        initialValues,
        (values) => console.log(values)
    )
    const {email, password} = values;
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn