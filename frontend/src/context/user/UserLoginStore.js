import axios from 'axios';
import { useEffect, useState } from "react"
import { userLoginContextObj } from "./userLoginContext"

export default function UserLoginStore({ children }) {
    const [loginStatus, setLoginStatus] = useState(false)
    const [error, setError] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const [token, setToken] = useState(null);

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function onSubmit(userCredentials) {
        try {
            let res = await axios.post('http://localhost:4000/user-api/login', userCredentials);
            if (res.data.message === 'login success') {
                sessionStorage.setItem('token', res.data.token);
                localStorage.setItem('userCred', JSON.stringify(res.data.user));
                let data = res.data.user
                let updatedUserData = { "id": data._id, "username": data.username, "email": data.email, "token": token };
                setCurrentUser(updatedUserData);
                setLoginStatus(true);
            } else {
                return res.data.message
            }
            return res.data;
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <userLoginContextObj.Provider value={[currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit, token]}>
            {children}
        </userLoginContextObj.Provider>
    );
}