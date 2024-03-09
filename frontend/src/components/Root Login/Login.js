import React, { useContext, useEffect } from "react";
import { userLoginContextObj } from "../../context/user/userLoginContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    let [currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit, token] = useContext(userLoginContextObj);

    useEffect(() => {
        if (loginStatus === true) {
            toast.success('Login Successfull', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/');
        }
    }, [loginStatus])

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                {error && <p className="errorMsgP text-warning">*{error}</p>}
               
                <input type="email" name="email" placeholder="Email" {...register('email', { required: '*email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email format' } })} />
                {errors.email && <p className="userErr  text-warning m-0 p-0">{errors.email.message}</p>}

                <input type="password" name="password" placeholder="Password" {...register('password', { required: '*password is required', minLength: { value: 3, message: 'password must be at least 4 characters long' } })} />
                {errors.password && <p className="userErr  text-warning m-0 p-0">{errors.password.message}</p>}
                <a href="#" className="forgetPwd">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}
