import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, getUsers, currentUser } from "../../redux/actions";
// import { Container, Row, Col } from "react-bootstrap";
// import "./styles/style.css";
import "../styles/style.css";
// // import "./styles/font-icons.css";
import "../styles/plugins.css";
import "../styles/responsive.css";
// import bg from "../assets/4.png";
import bg from "../../assets/4.png";

export default function Register() {
  const error = useSelector((state) => state.error);
  const navigate = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    direction: "",
    cedula: 0,
  });
  const { name, lastName, email, phone, direction, cedula } = user;

  // const expression = {
  //   name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  //   lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  //   email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
  //   phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, //eslint-disable-line
  //   password:
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character (*),
  // };

  const handleOnChange = (e) => {
    // e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      // if (
      //   name.length !== 0 &&
      //   // image.length !== 0 &&
      //   description.length !== 0 &&
      //   genres.length !== 0 &&
      //   platforms.length !== 0 &&
      //   rating.length !== 0 &&
      //   rating > 0 && rating < 6 &&
      //   release_date.length !== 0
      // ) {
      await dispatch(registerUser(user));
      await dispatch(currentUser(user.cedula))
      setUser({
        name: "",
        lastName: "",
        email: "",
        phone: 0,
        direction: "",
        cedula: 0,
      });
      navigate.push("/");

      // else if(name.length === 0 ||
      //   // image.length === 0 ||
      //   description.length === 0 ||
      //   genres.length === 0 ||
      //   platforms.length === 0 ||
      //   release_date.length === 0){
      //     alert("Please fill all the fields");
      // }
    } catch (error) {
      console.log("Error to Create a User", error);
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
                      type="text"
                      placeholder="Dirección"
                      value={direction}
                      name="direction"
                      onChange={(e) => handleOnChange(e)}
                    />
                    <input
                      type="number"
                      placeholder="Teléfono"
                      value={phone}
                      name="phone"
                      onChange={(e) => handleOnChange(e)}
                    />
                    {/* <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                    />
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                    /> */}

                    {/* <label className="checkbox-inline">
                      <input type="checkbox" value="" />I consent to Herboil
                      processing my personal data in order to send personalized
                      marketing material in accordance with the consent form and
                      the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />
                      By clicking "create account", I consent to the privacy
                      policy.
                    </label> */}
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
                    {/* <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href="#">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                      PRIVACY POLICY
                    </a>
                  </p> */}
                    <div className="go-to-btn mt-50">
                      <Link to="/login">Already have an account? Log in</Link>
                    </div>
                    <div className="go-to-btn mt-50">
                      <Link to="/register/employee">Eres parte de nuestro personal? Regisgrate aqui</Link>
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
