import React, { useContext, useEffect } from "react";
import { userLoginContextObj } from "../../context/user/userLoginContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { register, handleSubmit } = useForm();
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
                {error && <p className="errorMsgP text-warning">{error}</p>}
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" name="email" required {...register('email')}
                />
                <input type="password" name="password" placeholder="Password" required {...register('password')} />
                <a href="#" className="forgetPwd">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}
