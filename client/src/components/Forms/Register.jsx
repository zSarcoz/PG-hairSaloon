import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, getUsers, currentUser } from "../../redux/actions";
import Input from "./Input";
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
  const [errors, setErrors] = useState({});

  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });
  const [email, setEmail] = useState({ value: "", valid: null });
  const [cedula, setCedula] = useState({ value: "", valid: null });
  const [direction, setDirection] = useState({ value: "", valid: null });
  console.log(name);
  console.log(lastName);
  console.log(phone);
  console.log(email);
  console.log(cedula);
  console.log(direction)
  const user = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    direction: direction.value,
    cedula: cedula.value,
  };
  console.log("name1 should be: ", user.name);

  const expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, //eslint-disable-line
    cedula: /^[\+]?[(]?[0-9]{1}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/,
    direction: /^[a-zA-ZÀ-ÿ\s]{1,100}$/
    // password:
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character (*),
  };


  async function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);

    if (
      name.valid === "true" &&
      direction.valid === 'true' &&
      lastName.valid === "true" &&
      email.valid === "true" &&
      cedula.valid === "true" &&
      phone.valid === "true"
      // password.valid === 'true' &&
      // password2.value === password.value
    ) {
      await dispatch(registerUser(user));
      await dispatch(currentUser(cedula.value));

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
                      state={direction}
                      setState={setDirection}
                      name="direction"
                      type="text"
                      // label="Phone"
                      placeholder="Dirección"
                      error="Please enter a valid direction"
                      regularExpression={expression.direction}
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
                      <Link to="/register/employee">
                        Eres parte de nuestro personal? Regisgrate aqui
                      </Link>
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
