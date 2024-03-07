import Login from "./Login";
import Register from "./Register";
import React, { useState } from "react";

export default function RootLogin(props) {
    const [type, setType] = useState("signUp");
    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
            return;
        }
    };
    const handleRegistrationSuccess = () => {
        setType("signIn")
    }
    const containerClass =
        "containerBox " + (type === "signUp" ? "right-panel-active" : "");
    return (
        <div className="registerBody">
            <div className={containerClass} id="containerBox">
                <Login />
                <Register onRegistrationSuccess={handleRegistrationSuccess} />
                <div className="overlay-container">
                    <div className=" overlay ">
                        <div className="overlay-panel overlay-left ">
                            <h1>Welcome Back!</h1>
                            <p> To keep connected with us please login with your personal info</p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={() => handleOnClick("signIn")}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right ">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button
                                className="ghost "
                                id="signUp"
                                onClick={() => handleOnClick("signUp")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
