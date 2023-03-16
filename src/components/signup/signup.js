import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import './sign.css'
const schema = yup.object().shape({
    Name: yup.string().required('Please enter your name'),
    Email: yup.string().email('Please enter your valid email').required('Enter email'),
    Password: yup.string().required('Please enter your password'),
    Phone: yup.number().required("Ten numbers only")


})
function Signup() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const [form, setForm] = useState(true);
    const valued1 = sessionStorage.getItem('Name');
    const valued2 = sessionStorage.getItem('Email');
    const valued3 = sessionStorage.getItem('Password');
    const valued4 = sessionStorage.getItem('Phone');
    if (isValid && valued1 && valued2 && valued3 && valued4 && !form) {
        return <Redirect to='/login' />
    }
    return (
        <div id="forms">
            <div className="inputs">
                <h1 id="rehead">Register Now</h1>
                {<form onSubmit={handleSubmit((data) => {
                    sessionStorage.setItem('Name', data.Name);
                    sessionStorage.setItem('Email', data.Email);
                    sessionStorage.setItem('Password', data.Password);
                    sessionStorage.setItem('Phone', data.Phone);
                    sessionStorage.setItem("token", 5000)
                })}>
                    <input
                        {...register('Name')}
                        type='text'
                        placeholder="Name"
                    />
                    <p>{errors.Name?.message}</p>
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
                    <input
                        {...register('Phone')}
                        type='number'
                        placeholder="Phone number"
                        maxLength='10'
                    />
                    <p>{errors.Phone?.message}</p>
                    <button type="submit"
                        disabled={isDirty && !isValid}
                        onClick={() => setForm(false)}
                        id='submit'>Submit
                    </button>
                </form>}

            </div>
        </div>

    )
}
export default Signup   