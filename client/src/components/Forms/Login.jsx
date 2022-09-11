import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";
import { currentUser, getUsers } from "../../redux/actions";
import "../styles/style.css";
// import "./styles/font-icons.css";
// import "./styles/plugins.css";
// import "./styles/responsive.css";
import bg from "../../assets/4.png";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const allUsers = useSelector((state) => state.users);
  const [cedula, setCedula] = useState({ value: "", valid: null });
  // console.log("State of cedula",cedula);
  const user = { cedula: cedula.value };
  // console.log("User State", user);


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const expression = {
    cedula: /^[\+]?[(]?[0-9]{1}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/,
    // password:
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character (*),
  };

  const handleOnChange = (e) => {
    // e.preventDefault();
    setCedula({
      ...cedula,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("soy la cedula del handleSubmit",cedula);
    try {
      if (cedula.valid === "true") {

        await dispatch(currentUser(cedula.value));
        setCedula({
          cedula: 0,
        });
        
        setTimeout(() => {navigate.push("/");}, 2100);
      } else if (cedula.valid === "false") {
        Swal.fire(
          'Cedula invalida',
          'Coloque una cedula con los suficientes caracteres validos',
          'question'
        )
        // setTimeout(() => {window.location.reload()}, 2500);
      }else if(cedula.length === 0){
        alert("Please fill all the fields");
      }
    } catch (error) {
      navigate.push("/home");
      console.log("Error to Create a User", error);
    }
  };
  return (
    <>
      <div className="ltn__login-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">Sign In</h1>
                <h1 className="section-title">To Your Account</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                  aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="account-login-inner">
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="ltn__form-box contact-form-box"
                >
                  {/* <input type="text" name="email" placeholder="Email*"/> */}
                  {/* <input
                    type="text"
                    placeholder="Cédula"
                    value={cedula}
                    name="cedula"
                    onChange={(e) => handleOnChange(e)}
                  /> */}
                  <label>EMAIL</label>
                  <Input
                    state={cedula}
                    setState={setCedula}
                    // id="singup-email"
                    name="cedula"
                    type="number"
                    placeholder="Enter cedula"
                    error="This cedula is not valid"
                    regularExpression={expression.cedula}
                  />
                  <div className="btn-wrapper mt-0">
                    <button className="theme-btn-1 btn btn-block" type="submit">
                      INGRESA
                    </button>
                  </div>
                  {/* <div className="go-to-btn mt-20">
                    <a href="#">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </a>
                  </div> */}
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations
                  check out more quickly track your orders register
                </p>
                <div className="btn-wrapper">
                  <a href="/register" className="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
