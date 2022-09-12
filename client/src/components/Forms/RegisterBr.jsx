import React, { useState } from "react";
import { registerBarber } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Input from "./Input";
import "../styles/style.css";
import "../styles/plugins.css";
import "../styles/responsive.css";

export default function RegisterBr() {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });
  const [email, setEmail] = useState({ value: "", valid: null });
  const [cedula, setCedula] = useState({ value: "", valid: "true" });
  const [checkIn, setCheckIn] = useState({ value: "", valid: "true" });
  const [password, setPassword] = useState({ value: "", valid: null });
  const [password2, setPassword2] = useState({ value: "", valid: null });
  console.log(name);
  console.log(lastName);
  console.log(phone);
  console.log(email);
  console.log(cedula);
  console.log(checkIn);
  console.log(password);
  console.log(password2);


  const user = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    checkIn: checkIn.value,
    cedula: cedula.value,
  };
  const expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, //eslint-disable-line
    cedula: /^[\+]?[(]?[0-9]{1}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/,
    // direction: /^[a-zA-ZÀ-ÿ\s]{1,100}$/
    // checkIn: /s+(?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])[-/.](?:19\d{2}|20[01][0-9]|2020)/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character (*),
  };
  async function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);

    if (
      name.valid === "true" &&
      lastName.valid === "true" &&
      email.valid === "true" &&
      cedula.valid === "true" &&
      phone.valid === "true" &&
      // checkIn.valid === "true" &&
      password.valid === "true" &&
      // password2.value === "true" &&
      password2.value === password.value
    ) {
      await dispatch(registerBarber(user));
      // await dispatch(currentUser(cedula.value));

      navigate.push("/");
    } else {
      // Swal.fire({
      //   icon: "question",
      //   title: "Oops...",
      //   text: "Complete all fields",
      //   confirmButtonColor: "#10408F",
      // });
      alert("fill the blanks");
    }
  }
  // const [employee, setEmployee] = useState({
  //   name: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   cedula: "",
  //   checkIn: "",
  //   password: "",
  //   confirmpassword: "",
  // });
  // const {
  //   name,
  //   lastName,
  //   email,
  //   phone,
  //   cedula,
  //   checkIn,
  //   password,
  //   confirmpassword,
  // } = employee;
  // const handleOnChange = (e) => {
  //   // e.preventDefault()
  //   setEmployee({
  //     ...employee,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(employee);
  //   try {
  //     if (
  //       name.length !== 0 &&
  //       lastName.length !== 0 &&
  //       email.length !== 0 &&
  //       phone.length !== 0 &&
  //       cedula.length !== 0 &&
  //       checkIn.length !== 0 &&
  //       password.length !== 0 &&
  //       confirmpassword === password
  //     ) {
  //       dispatch(registerBarber(employee));
  //       setEmployee({
  //         name: "",
  //         lastName: "",
  //         email: "",
  //         phone: 0,
  //         checkIn: 0,
  //         cedula: 0,
  //         password: "",
  //       });
  //       navigate.push("/home");
  //     } else if (
  //       name.length === 0 ||
  //       lastName.length === 0 ||
  //       email.length === 0 ||
  //       phone.length === 0 ||
  //       cedula.length === 0 ||
  //       password.length === 0 ||
  //       checkIn.length === 0 ||
  //       confirmpassword.length === 0
  //     ) {
  //       alert("Please fill all the fields");
  //     }
  //   } catch (error) {
  //     console.log("Error to Create a Barber", error);
  //   }
  // };

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
                      <Input
                        state={name}
                        setState={setName}
                        type="text"
                        // label="First Name"
                        placeholder="First Name"
                        // value={name}
                        name="name"
                        error="Your first name cannot contain numbers or special characters"
                        regularExpression={expression.name}
                      />
                      <Input
                        state={lastName}
                        setState={setLastName}
                        name="lastName"
                        type="text"
                        // label="Last Name"
                        placeholder="Last Name"
                        error="Your last name cannot contain numbers or special characters"
                        regularExpression={expression.lastName}
                      />
                      <Input
                        state={email}
                        setState={setEmail}
                        name="email"
                        type="email"
                        // label="E-mail"
                        placeholder="E-mail"
                        error="Please enter a valid email"
                        regularExpression={expression.email}
                      />
                      <Input
                        state={phone}
                        setState={setPhone}
                        name="phone"
                        type="number"
                        // label="Phone"
                        placeholder="Phone"
                        error="Please enter a valid phone number"
                        regularExpression={expression.phone}
                      />
                      <Input
                        state={cedula}
                        setState={setCedula}
                        name="cedula"
                        type="number"
                        // label="Phone"
                        placeholder="Cedula"
                        error="Please enter a valid cedula"
                        regularExpression={expression.cedula}
                      />
                      <Input
                        state={checkIn}
                        setState={setCheckIn}
                        name="checkIn"
                        type="date"
                        // label="Phone"
                        placeholder="checkIn"
                        // error="Please enter a valid direction"
                        // regularExpression={expression.checkIn}
                      />
                      <Input
                        state={password}
                        setState={setPassword}
                        name="password"
                        type="password"
                        // label="Password"
                        placeholder="Password"
                        error="Your passwords needs 8-12 characters, one special symbol, one number, at least one lowercase letter and at least one uppercase letter"
                        regularExpression={expression.password}
                      />
                      <Input
                        state={password2}
                        setState={setPassword2}
                        name="confirm-password"
                        type="password"
                        // label="Confirm password"
                        placeholder="Confirm password"
                        regularExpression={expression.password}
                      />
                      {password2.value !== password.value && (
                        <span>Password does not match</span>
                      )}
                      {/* <input
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
                      /> */}
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
