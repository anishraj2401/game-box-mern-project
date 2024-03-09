import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { walletContextObj } from '../../context/wallet/walletContext';
import { userLoginContextObj } from '../../context/user/userLoginContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TopUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { updateWalletData, walletData, setWalletData } = useContext(walletContextObj);
    const [currentUser, , loginStatus, , , ,] = useContext(userLoginContextObj);
    const [error, setError] = useState('');

    async function onSubmit(formData) {
        try {
            if (loginStatus) {
                const postResponse = await axios.post("http://localhost:4000/payment-api/wallet-form",
                    {
                        username: formData.username,
                        email: currentUser.email,
                        amount: formData.amount,
                        currency: formData.currency,
                        cardNumber: formData.cardNumber,
                        expirationDate: formData.expirationDate,
                        cvv: formData.cvv
                    }, {
                    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
                });
                if (postResponse.data.message === "Wallet balance updated") {
                    setWalletData(postResponse.data.data)
                    toast.success('Payment Successfull', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    toast.success("JWT expired", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                        theme: "light",
                    })
                }
            }
        } catch (err) {
            console.log('error psoting data', err);
        }
    }

    return (
        <div className="top-up-form-container cardBox  d-flex justify-content-start">
            <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
                {error && <p className="errorMsgP text-warning">*{error}</p>}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="username" placeholder="Enter your username" {...register('username', {
                        required: '*username is required', minLength: { value: 3, message: 'Username must be at least 3 characters long' }
                    })} />
                    {errors.username && <p className="userErr  text-warning m-0 p-0">{errors.username.message}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter your email' value={currentUser.email} disabled {...register('email')} />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" name="amount" placeholder="Enter the amount" {...register('amount', {
                        required: '*amount is necessary', minLength: { value: 1, message: 'amount should contain 1 or more digits ' }
                    })} />
                    {errors.amount && <p className="userErr  text-warning m-0 p-0">{errors.amount.message}</p>}

                </div>
                <div className="form-group">
                    <label>Currency</label>
                    <select name="currency" placeholder='--Select currency--' required {...register('currency')}>
                        <option value="--Select currency--"> --Select currency-- </option>
                        <option value="₹">INR (₹)</option>
                        <option value="$">USD ($)</option>
                        <option value="€">EUR (€)</option>
                        <option value="£">GBP (£)</option>
                    </select>
                    {errors.currency && <p className="userErr  text-warning m-0 p-0">{errors.currency.message}</p>}
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" placeholder="Enter your card number.." {...register('cardNumber', {
                        required: '*cardNumber is required', minLength: { value: 16, message: 'card Number must be at least 16 characters long' }
                    })} />
                    {errors.cardNumber && <p className="userErr  text-warning m-0 p-0">{errors.cardNumber.message}</p>}

                </div>
                <div className="form-group">
                    <label>Expiration Date</label>
                    <input type="text" name="expirationDate" placeholder="Enter expiration date" {...register('expirationDate', {
                        required: '*expirationDate is required'
                    })} />
                    {errors.expirationDate && <p className="userErr  text-warning m-0 p-0">{errors.expirationDate.message}</p>}

                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" placeholder="Enter cvv" {...register('cvv', {
                        required: '*cvv is required', minLength: { value: 3, message: 'cvv must contain 3 digit' }
                    })} />
                    {errors.cvv && <p className="userErr  text-warning m-0 p-0">{errors.cvv.message}</p>}

                </div>
                <button type="submit">Top Up</button>
            </form>
        </div>
    );
};