import React from "react";
import "./styles/style.css";
// import "./styles/font-icons.css";
// import "./styles/plugins.css";
// import "./styles/responsive.css";
import bg from "../assets/4.png";


export default function Login(){
    return(
        <>
            <div className="ltn__login-area pb-65">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Sign In</h1>
                        <h1 className="section-title">To  Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="email" placeholder="Email*"/>
                            <input type="password" name="password" placeholder="Password*"/>
                            <div className="btn-wrapper mt-0">
                                <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                            </div>
                            <div className="go-to-btn mt-20">
                                <a href="#"><small>FORGOTTEN YOUR PASSWORD?</small></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="account-create text-center pt-50">
                        <h4>DON'T HAVE AN ACCOUNT?</h4>
                        <p>Add items to your wishlistget personalised recommendations
                            check out more quickly track your orders register</p>
                        <div className="btn-wrapper">
                            <a href="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}