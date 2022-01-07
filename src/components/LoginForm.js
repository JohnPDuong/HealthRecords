import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EMAIL_MAX, PASSWORD_MAX } from '../constants/SignUpFormConstants';
import { Navigate } from 'react-router-dom';

export const LoginForm = () => {
    const port = process.env.REACT_APP_ENDPOINT_PORT;

    const [ successfulLogin, setSuccessfulLogin ] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup.string().required("Email is required")
            .max(EMAIL_MAX, "Email must be 100 characters or shorter"),
        password: yup.string().required('Password is required')
            .max(PASSWORD_MAX, "Password must be shorter than 32 characters"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    const onSubmit = async values => {
        document.getElementById("submitBtn").disabled=true;
        
        await fetch(`http://localhost:${[port]}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
        .then(res => res.json())
        .then(resJson => {
            if (resJson.result) {
                setSuccessfulLogin(true);
            } else {
                throw "Invalid email or password";
            }
        })
        .catch(error => console.log("Auth failed: " + error.message));

        document.getElementById("submitBtn").disabled=false;
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <label>Email </label>
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            <p>{ errors.email && errors.email.message }</p>
            <br/>

            <label>Password </label>
            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <p>{ errors.password && errors.password.message }</p>
            <br/>

            <button type="submit" id="submitBtn">Submit</button>

            { successfulLogin && <Navigate to="/" replace={ true } /> }
        </form>
    );
}