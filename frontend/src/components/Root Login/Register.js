import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    async function onSubmit(userObj) {
        try {
            //store in local api
            let res = await axios.post("http://localhost:4000/user-api/user", userObj);
            if (res.status === 201) {
                props.onRegistrationSuccess();
                navigate("/login");
            }
            //a user already exsted in API
            else {
                setError(res.data.message);
            }
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mt-3">Create Account</h1>
                {error && <p className="errorMsgP text-warning">{error}</p>}
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"> <i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" name="username" placeholder="UserName" required {...register('username')}
                />
                <input type="email" name="email" placeholder="Email" required {...register('email')} />
                <input type="password" name="password" placeholder="Password" required {...register('password')} />
                <button className="m-3">Sign Up</button>
            </form>
        </div>
    );
}
