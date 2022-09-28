import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, getUsers, currentUser, currentUserLocalStorage } from "../../redux/actions";
import Input from "./Input";
import fondok from "../styles/img/fkapolo.png";
import s from "../styles/Register.module.css";
import Footer from "../Home/Footer";
import Swal from "sweetalert2"
import AlertSuccess from "../Forms/AlertSuccess.jsx";
import {CartContext} from "../CartComponent/CartContext.jsx"
import bg from "../../assets/4.png";

export default function Register() {
  // const { createUser, users, products } = useContext(CartContext);

  const userA = useSelector((state) => state.currentUser) 
  const error = useSelector((state) => state.error);
  const navigate = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isShown, setIsShow] = useState(false);
  // console.log(isShown)

  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });
  const [email, setEmail] = useState({ value: "", valid: null });
  const [cedula, setCedula] = useState({ value: "", valid: null });
  const [direction, setDirection] = useState({ value: "", valid: null });
  const user1 = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    direction: direction.value,
    cedula: cedula.value,
  };
  // console.log("name1 should be: ", user.name);

  const expression = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, //eslint-disable-line
    cedula: /^[\+]?[(]?[0-9]{1}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/,
    direction: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    // password:
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character (*),
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);

    if (
      name.valid === "true" &&
      direction.valid === "true" &&
      lastName.valid === "true" &&
      email.valid === "true" &&
      cedula.valid === "true" &&
      phone.valid === "true"
      // password.valid === 'true' &&
      // password2.value === password.value
    ) {
      await dispatch(registerUser(user1));
      await dispatch(currentUser(cedula.value));
      setIsShow(true)
      setTimeout(() => {
        // createUser(userA[0])
        navigate.push("/services");
      }, 2000);
    } else {
      setIsShow(false)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa todos los campos",
        confirmButtonColor: "#10408F",
      });    }
  }

  const handleClick = (e) => {
    setIsShow((current) => !current);
    // navigate.push("/services");
  };

  return (
    <>
      {isShown && <AlertSuccess />}
      <img className={s.fondouno} src={fondok} alt="FONDO" />

      <div className={s.container}>
        <p className={s.css}>Forma parte de la familia Kapolo</p>
        <div className={s.formulario}>
          <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
            <Input
              state={name}
              setState={setName}
              type="text"
              // label="First Name"
              placeholder="Nombre"
              // value={name}
              name="name"
              error="Tu nombre no puede contener números o carácteres especiales"
              regularExpression={expression.name}
            />
            <Input
              state={lastName}
              setState={setLastName}
              name="lastName"
              type="text"
              // label="Last Name"
              placeholder="Apellido"
              error="Tu apellido no puede contener números o carácteres especiales"
              regularExpression={expression.lastName}
            />
            <Input
              state={email}
              setState={setEmail}
              name="email"
              type="email"
              // label="E-mail"
              placeholder="Correo electrónico"
              error="Por favor ingresa un correo válido"
              regularExpression={expression.email}
            />
            <Input
              state={phone}
              setState={setPhone}
              name="phone"
              type="number"
              // label="Phone"
              placeholder="Número de teléfono"
              error="Por favor ingresa un número válido"
              regularExpression={expression.phone}
            />
            <Input
              state={cedula}
              setState={setCedula}
              name="cedula"
              type="number"
              // label="Phone"
              placeholder="Cedula"
              error="Por favor ingresa una cédula válida"
              regularExpression={expression.cedula}
            />
            <Input
              state={direction}
              setState={setDirection}
              name="direction"
              type="text"
              // label="Phone"
              placeholder="Dirección"
              error="Por favor ingresa una dirección válida"
              regularExpression={expression.direction}
            />
            <div className={s.boton}>
              <button
                className={s.botonguardar}
                type="submit"
                onClick={handleClick}
              >
                {" "}
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={s.divFooter}>
        <Footer />
      </div>
    </>
  );
}
