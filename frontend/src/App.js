import React, { useContext, useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { userLoginContextObj } from '../src/context/user/userLoginContext';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from './components/PrivateRoute';

import RootLayout from './RootLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Games from './components/Games/Games';
import Games01 from './components/Games/Games01';
import BuyVirtualCard from './components/Wallet/BuyVirtualCard';
import Players from './components/Player/Players';
import RootLogin from './components/Root Login/RootLogin';
import Login from './components/Root Login/Login';
import { ToastContainer } from 'react-toastify';


export default function App() {
  const [currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit, token] = useContext(userLoginContextObj);
  const [refreshed, setRefresh] = useState(false);
  useEffect(() => {
    if (Object.keys(currentUser).length === 0 && localStorage.getItem('userCred') !== null) {
      //authenticate the token
      const authToken = sessionStorage.getItem('token');
      const userCred = JSON.parse(localStorage.getItem('userCred'));

      if (!authToken) {
        console.log('token not found');
      }
      else {
        try {
          const decodedToken = jwtDecode(authToken)
          const currentTime = Date.now() / 1000
          if (decodedToken.exp < currentTime) {
            setLoginStatus(false);
            setCurrentUser({});
            sessionStorage.removeItem('token');
            localStorage.removeItem('userCred');
            localStorage.removeItem('prevPath');
            alert("Session expired. Login again!")
          }
          else if (decodedToken.email !== userCred.email) {
            setLoginStatus(false);
            setCurrentUser({});
            alert("Invalid Token. Login again!")
            // navigate('/login')
          }
          else {
            //success full login with valid token
            setRefresh(true);
            let data = JSON.parse(localStorage.getItem('userCred'));
            let updatedUserData = { "id": data._id, "username": data.username, "email": data.email, "token": authToken };
            setCurrentUser(updatedUserData);
            setLoginStatus(true);
          }
        }
        catch (error) {
          console.log('Error decoding token: ', error);
        }
      }
    }
  }, [])

  let router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/register',
          element: <RootLogin />
        },
        {
          path: '/login',
          element: <RootLogin />
        },
        {
          path: '/games',
          element: <Games />,
        }, {
          path: 'games/games01',
          element:
            <PrivateRoute>
              <Games01 />
            </PrivateRoute>
        },
        {
          path: '/top-up',
          element:
            <PrivateRoute>
              <BuyVirtualCard />
            </PrivateRoute>
        },
        {
          path: '/players',
          element:
            <PrivateRoute >
              <Players />
            </PrivateRoute >
        },
        {
          path: '/login',
          element: <Login />
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  )
};