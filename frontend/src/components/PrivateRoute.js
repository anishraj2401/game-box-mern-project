import { useContext, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userLoginContextObj } from '../context/user/userLoginContext';

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit, token] = useContext(userLoginContextObj);

    useEffect(() => {
        if (loginStatus && location.pathname !== '/login') {
            localStorage.setItem('prevPath', location.pathname);
        }
    }, [loginStatus, location.pathname]);


    if (!loginStatus && location.pathname !== '/register') {
        const prevPath = localStorage.getItem('prevPath');
        if (prevPath) {
            return <Navigate to={prevPath} />
        }
        else {
            return <Navigate to='/register' />
        }
    }
    return children;
}
