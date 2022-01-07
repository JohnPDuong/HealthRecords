import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EMAIL_MAX, PASSWORD_MAX } from '../constants/SignUpFormConstants';
import { Navigate } from 'react-router-dom';

export const LoginForm = () => {
    const port = process.env.REACT_APP_ENDPOINT_PORT;

    const [ successfulReg, setSuccessfulReg ] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup.string().required("Email is required")
            .max(EMAIL_MAX, "Email must be 100 characters or shorter"),
        password: yup.string().required('Password is required')
            .max(PASSWORD_MAX, "Password must be shorter than 32 characters"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    const onSubmit = (values) => {

        console.log(values);
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

            { successfulReg && <Navigate to="/" replace={ true } /> }
        </form>
    );
}