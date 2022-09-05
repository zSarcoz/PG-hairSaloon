import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "./styles/style.css";
// import "./styles/font-icons.css";
import "./styles/plugins.css";
import "./styles/responsive.css";
import bg from "../assets/4.png";

export default function Register() {
  return (
    <>
      <div className="ltn__body-font">
        <div
          class="ltn__breadcrumb-area ltn__breadcrumb-area-4 bg-overlay-theme-10--- bg-image"
          // data-bg={bg}
          data-bg="../assets/4.png"
        >
          {/* <img src={bg} alt="" /> */}
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-4 justify-content-between">
                  <div class="section-title-area">
                    <h1 class="section-title white-color">Register</h1>
                  </div>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__login-area pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">Register</h1>
                  <h1 className="section-title">Your Account</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="account-login-inner">
                  <form action="#" className="ltn__form-box contact-form-box">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <input type="text" name="email" placeholder="Email*" />
                    <input
                      type="text"
                      name="cedula"
                      placeholder="Cédula de Indentidad"
                    />
                    <input
                      type="text"
                      name="direction"
                      placeholder="Dirección"
                    />
                    <input
                      type="number"
                      name="mobileNumber"
                      placeholder="Número de Teléfono"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                    />
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                    />
                    
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />I consent to Herboil
                      processing my personal data in order to send personalized
                      marketing material in accordance with the consent form and
                      the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />
                      By clicking "create account", I consent to the privacy
                      policy.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <a href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </a>
                    </p>
                    <div className="go-to-btn mt-50">
                      <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
