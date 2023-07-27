import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister} from '../services/Api.js';



export default function Register() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name:'',
        phone:0,
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userRegister(signup);
        if (res.data === "Signup Successful !") {

            console.log("Signup Successfull")
            // setTimeout(() => {
            // navigate('/admin/dashboard');
            // }, 1500);

        } else if (res.data === "Email Already Exists") {
            console.log('Email Already Exists');
        } else  {
            console.log('invalid email')
        }
    };


    return (
        <>
            <div className='main'>
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                            <h1 className='auth-heading'>Register</h1>
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required /><br/>
                            <input type="number" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required /><br/>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required /><br/>
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required /><br/><br/>

                            <button type='submit' className='auth-btn app-x-shadow'> Submit </button>
                        </form>
                        <Link to='/login' className='auth-links'>Login</Link>
                    </div>
                </div>

            </div>

        </>
    )
}