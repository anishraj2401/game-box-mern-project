import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    let navigate = useNavigate();
    return (
        <section class="page_404 m-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-12 text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div>
                            <div class="contant_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not avaible!</p>
                                <a href="" className="link_404" onClick={() => { navigate('/') }}>Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
