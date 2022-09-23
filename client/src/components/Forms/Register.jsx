import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, getUsers, currentUser } from "../../redux/actions";
import Input from "./Input";
import fondok from "../styles/img/fkapolo.png";
import s from "../styles/Register.module.css"
import Footer from "../Home/Footer";
// import { Container, Row, Col } from "react-bootstrap";
// import "./styles/style.css";
// import "../styles/style.css";
// // import "./styles/font-icons.css";
// import "../styles/plugins.css";
// import "../styles/responsive.css";
// import bg from "../assets/4.png";
import bg from "../../assets/4.png";

export default function Register() {
  const error = useSelector((state) => state.error);
  const navigate = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isShown, setIsShow] = useState(false)

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

        navigate.push("/home");
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

  const handleClick = (e) => {
    setIsShow(current => !current)
    // navigate.push("/services");
  }; 

  return (
    <>
    <img className={s.fondouno} src={fondok} alt="FONDO" />
    
          <div className="container">
             <p className={s.css}>
                    Forma parte de la familia Kapolo</p>
            <div className={s.formulario}>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="ltn__form-box contact-form-box">
                    <Input
                      state={name}
                      setState={setName}
                      type="text"
                      // label="First Name"
                      placeholder="Nombre"
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
                      placeholder="Apellido"
                      error="Your last name cannot contain numbers or special characters"
                      regularExpression={expression.lastName}
                    />
                    <Input
                      state={email}
                      setState={setEmail}
                      name="email"
                      type="email"
                      // label="E-mail"
                      placeholder="Correo electrónico"
                      error="Please enter a valid email"
                      regularExpression={expression.email}
                    />
                    <Input
                      state={phone}
                      setState={setPhone}
                      name="phone"
                      type="number"
                      // label="Phone"
                      placeholder="Número de teléfono"
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
                    <div className={s.boton}>
                      <button
                        className="botonguardar"
                        type="submit"> Guardar</button>
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
                    
                  
                </div>
              </div>
            
          
        </div>
        <Footer/>
    </>
  );
}
