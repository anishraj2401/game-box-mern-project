import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { walletContextObj } from '../../context/wallet/walletContext';
import { userLoginContextObj } from '../../context/user/userLoginContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TopUpForm() {
    const { register, handleSubmit } = useForm();
    const { updateWalletData, walletData, setWalletData } = useContext(walletContextObj);
    const [currentUser, , loginStatus, , error, ,] = useContext(userLoginContextObj);

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
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('token')}`
                        }

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
        } catch (error) {
            console.log('error psoting data', error);
        }
    }

    return (
        <div className="top-up-form-container cardBox  d-flex justify-content-start">
            <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
                {error && <p className="errorMsgP text-warning">{error}</p>}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="username" placeholder='Enter your username' required {...register('username')} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter your email' value={currentUser.email} disabled {...register('email')} />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" name="amount" placeholder='Enter the amount' required {...register('amount')} />
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
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" name="cardNumber" maxLength="16" required {...register('cardNumber')} />
                </div>
                <div className="form-group">
                    <label>Expiration Date</label>
                    <input type="text" name="expirationDate" required {...register('expirationDate')} />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" required {...register('cvv')} />
                </div>
                <button type="submit">Top Up</button>
            </form>
        </div>
    );
};