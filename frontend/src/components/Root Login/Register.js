
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { userLoginContextObj } from "../../context/user/userLoginContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const onSubmit = async (userObj) => {
        try {
            //store in local api
            let res = await axios.post("http://localhost:4000/user-api/user", userObj);
            if (res.status === 201) {
                props.onRegistrationSuccess();
                toast.success('User Registration Successfull. Redirecting to login', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/login");
            }
            //a user already exsted in API
            else {
                setError(res.data.message);
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");

        }
    }
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mt-3">Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"> <i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                {error && <p className="errorMsgP text-warning">*{error}</p>}

                <input type="text" name="username" placeholder="UserName" {...register('username', {
                    required: '*username is required', minLength: { value: 3, message: 'Username must be at least 3 characters long' }
                })} />
                {errors.username && <p className="userErr  text-warning m-0 p-0">{errors.username.message}</p>}

                <input type="email" name="email" placeholder="Email" {...register('email', { required: '*email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email format' } })} />
                {errors.email && <p className="userErr  text-warning m-0 p-0">{errors.email.message}</p>}

                <input type="password" name="password" placeholder="Password" {...register('password', { required: '*password is required', minLength: { value: 3, message: 'password must be at least 4 characters long' } })} />
                {errors.password && <p className="userErr  text-warning m-0 p-0">{errors.password.message}</p>}
                <button className="m-3">Sign Up</button>
            </form>
        </div>
    );
}