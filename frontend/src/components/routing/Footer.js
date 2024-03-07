import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  let navigate = useNavigate();
  return (
    <footer className="bg-light text-center text-lg-start text-muted mt-5">
      <section className="text-white d-flex justify-content-around align-items-center p-4 border-bottom bg-secondary">
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className='text-uppercase mb-4'>
                <b>GAME BOX</b>
              </h6>
              <p className='lh-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2 ">
              <h6 className='text-uppercase mb-4'>Services</h6>
              <p><a onClick={() => { navigate('/about') }}>About Us</a></p>
              <p><a onClick={() => { navigate('/games') }}>Play Games</a></p>
              <p><a onClick={() => { navigate('/top-up') }}>Wallet Top-Up</a></p>
              <p><a onClick={() => { navigate('/') }}>Contact Us</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto  ">
              <h6 className='text-uppercase mb-4'>Contact</h6>
              <p><i className="fas fa-home me-2 "></i> DLF Hyderabad, IN 50032</p>
              <p><i className="fas fa-envelope me-3 "></i> info@example.com</p>
              <p><i className="fas fa-phone me-3 "></i> + 91 950 499 2208</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center text-white bg-dark p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©2024. GAME BOX All Rights Reserved
      </div>
    </footer>
  );
};
