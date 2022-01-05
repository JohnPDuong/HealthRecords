import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {FIRST_NAME_MAX, LAST_NAME_MAX } from '../constants/SignUpFormConstants';
import crypto from 'crypto';

export const SignUpForm = () => {
    const port = process.env.REACT_APP_ENDPOINT_PORT;
    const [ invalidEmail, setInvalidEmail ] = useState(false);

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
        document.getElementById("submitBtn").disabled=true;

        console.log(values);

        if (!invalidEmail)
        {
            let salt = crypto.randomBytes(128).toString('base64');
            let iterations = 10000;

            crypto.pbkdf2(values.password, salt, iterations, 64, 'sha512', async (err, derivedKey) => {
                if (err) throw err;
                
                const { fname, lname, email } = values;
                const password = derivedKey.toString('base64');

                const fetchValues = { fname, lname, email, password, salt };

                await fetch(`http://localhost:${[port]}/adduserbyregistration`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(fetchValues),
                })
                .then(res => res.json())
                .then(resJson => {
                    console.log(resJson);
                });
            });
        }

        document.getElementById("submitBtn").disabled=false;
    };

    const handleEmailBlur = async values => {
        if (emailSchema.isValidSync(values.target.value) && values.target.value) {
            await fetch(`http://localhost:${port}/validateuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {email: values.target.value} ),
            })
            .then(res => res.json())
            .then(resJson => {
                setInvalidEmail(!resJson.result);
                if (!resJson.result) {
                    document.getElementById("email").style.border="2px solid red";
                }
                else
                {
                    document.getElementById("email").style.border="1px solid black";
                }
            })
            .catch(error => console.log("Auth failed: " + error.message));
        }
        else
        {
            setInvalidEmail(false);
            document.getElementById("email").style.border="1px solid black";
        }
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <label>First Name </label>
            <input 
                placeholder="First Name"
                {...register("fname")}
            />
            <p>{errors.fname && errors.fname.message}</p>
            <br/>

            <label>Last Name </label>
            <input 
                placeholder="Last Name"
                {...register("lname")}
            />
            <p>{errors.lname && errors.lname.message}</p>
            <br/>
            
            <label>Email </label>
            <input
                id="email"
                placeholder="Email"
                type="email"
                {...register("email")}
                onBlur={(e) => handleEmailBlur(e)}
            />
            <p>{errors.email && errors.email.message}</p>
            <p>{invalidEmail && "Email already exists"}</p>
            <br/>

            <label>Password </label>
            <input
                placeholder="Password"
                type="password"
                {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
            <br/>

            <label>Confirm Password </label>
            <input
                placeholder="Confirm Password"
                type="password"
                {...register("confirmPassword")}
            />
            <p>{ errors.confirmPassword && errors.confirmPassword.message }</p>
            <br/>

            <button type="submit" id="submitBtn">Submit</button>
        </form>
    );
};