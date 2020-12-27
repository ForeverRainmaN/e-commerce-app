import React, {FC} from 'react';
import useForm from "../../hooks/useForm";

const initialValues = {
    email: '',
    password: ''
}

const SignIn: FC = () => {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm({
        initialValues,
        onSubmit: values => console.log({values})
    });
    const {email, password} = values;
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    name='email'
                    type='email'
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <label>Email</label>
                <input
                    value={password}
                    name='password'
                    type='password'
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <label>Password</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignIn