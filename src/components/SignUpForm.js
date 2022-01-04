import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FIRST_NAME_MAX, LAST_NAME_MAX } from '../constants/SignUpFormConstants';

export const SignUpForm = () => {
    const [ invalidEmail, setValidEmail ] = useState(false);

    const emailSchema = yup.string().email();

    const validationSchema = yup.object().shape({
        fname: yup.string().required("First name is required").max(FIRST_NAME_MAX, "First name must be shorter than ${FIRST_NAME_MAX}"),
        lname: yup.string().required("Last name is required").max(LAST_NAME_MAX, `Last name must be shorter than ${LAST_NAME_MAX}`),
        email: yup.string().required("Email is required").matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Please enter a valid email address"),
        password: yup.string().required('Password is required').matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
        confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref('password'), null], "Passwords do not match"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    
    const onSubmit = async values => {
        
    };

    const handleEmailBlur = async values => {
        if (emailSchema.isValidSync(values.target.value) && values.target.value) {
            await fetch(`http://localhost:${process.env.REACT_APP_ENDPOINT_PORT}/validateuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: values.target.value}),
            })
            .then(res => res.json())
            .then(resJson => {
                setValidEmail(!resJson.result);
            })
            .catch(error => console.log("Auth failed: " + error.message));
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                placeholder="First Name"
                {...register("fname")}
            />
            <p>{errors.fname && errors.fname.message}</p>
            <br/>

            <input 
                placeholder="Last Name"
                {...register("lname")}
            />
            <p>{errors.lname && errors.lname.message}</p>
            <br/>
            
            <input
                placeholder="Email"
                type="email"
                {...register("email")}
                onBlur={(e) => handleEmailBlur(e)}
            />
            <p>{errors.email && errors.email.message}</p>
            <p>{invalidEmail && "Email already exists"}</p>
            <br/>

            <input
                placeholder="Password"
                type="password"
                {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
            <br/>

            <input
                placeholder="Confirm Password"
                type="password"
                {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            <br/>

            <button type="submit">Submit</button>
        </form>
    );
};