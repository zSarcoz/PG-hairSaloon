import React, { useState } from "react";
import { registerBarber } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/style.css";
import "../styles/plugins.css";
import "../styles/responsive.css";

export default function RegisterBr() {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    cedula: "",
    checkIn: "",
    password: "",
    confirmpassword: "",
  });
  const {
    name,
    lastName,
    email,
    phone,
    cedula,
    checkIn,
    password,
    confirmpassword,
  } = employee;
  const handleOnChange = (e) => {
    // e.preventDefault()
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employee);
    try {
      if (
        name.length !== 0 &&
        lastName.length !== 0 &&
        email.length !== 0 &&
        phone.length !== 0 &&
        cedula.length !== 0 &&
        checkIn.length !== 0 &&
        password.length !== 0 &&
        confirmpassword === password
      ) {
        dispatch(registerBarber(employee));
        setEmployee({
          name: "",
          lastName: "",
          email: "",
          phone: 0,
          checkIn: 0,
          cedula: 0,
          password: "",
        });
        navigate.push("/home");
      } else if (
        name.length === 0 ||
        lastName.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        cedula.length === 0 ||
        password.length === 0 ||
        checkIn.length === 0 ||
        confirmpassword.length === 0
      ) {
        alert("Please fill all the fields");
      }
    } catch (error) {
      console.log("Error to Create a Barber", error);
    }
  };

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
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="ltn__form-box contact-form-box"
                    >
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="text"
                        placeholder="Lastame"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="text"
                        placeholder="Email*"
                        value={email}
                        name="email"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="number"
                        placeholder="Cédula"
                        value={cedula}
                        name="cedula"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="date"
                        placeholder="CheckIn"
                        value={checkIn}
                        name="checkIn"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="number"
                        placeholder="Teléfono"
                        value={phone}
                        name="phone"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="password"
                        placeholder="Password*"
                        value={password}
                        name="password"
                        onChange={(e) => handleOnChange(e)}
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password*"
                        value={confirmpassword}
                        name="confirmpassword"
                        onChange={(e) => handleOnChange(e)}
                      />
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
                      <div className="go-to-btn mt-50">
                        <Link to="/login">Already have an account? Log in</Link>
                      </div>
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
