import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css"
function Dlogin() {
    const schema = yup.object().shape({
        Email: yup.string().email('Please enter your valid email').required('Enter email'),
        Password: yup.string().required('Please enter your password'),

    })
    const history = useHistory();
    const validEmil = sessionStorage.getItem('Email');
    const validPassword = sessionStorage.getItem('Password');
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const [form, setForm] = useState(true);
    const valued2 = sessionStorage.getItem('Email');
    const valued3 = sessionStorage.getItem('Password');
    if (isValid && validEmil && validPassword  && !form) {
        return <Redirect to='/navhead' />
    }
    return (
        
        <div id="form2">

            <div id="form">
                <h1>Login</h1>
                {<form onSubmit={handleSubmit((data) => {
                    sessionStorage.getItem('Email', data.Email);
                    sessionStorage.getItem('Password', data.Password);
                    sessionStorage.setItem("token", 5000)
                })}>
                    <input {...register('Email')}
                        type='email'
                        placeholder="Email"
                    />
                    <p>{errors.Email?.message}</p>
                    <input
                        {...register('Password')}
                        type='password'
                        placeholder="Password"
                    />
                    <p>{errors.Password?.message}</p>  
                    
                    <button type="submit"
                        disabled={isDirty && !isValid}
                        onClick={() => setForm(false)}
                        id='sbtn'>Submit
                    </button>
                </form>}

            </div>

        </div>

    )
}
export default Dlogin