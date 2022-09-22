import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { currentUser, getUsers } from "../../redux/actions";
import s from "../styles/Login.module.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.key)
    // console.log("soy la cedula del handleSubmit",cedula);
    try {
      if (cedula.valid === "true") {
        await dispatch(currentUser(cedula.value));
        setCedula({
          cedula: 0,
        });

        setTimeout(() => {
          navigate.push("/home");
        }, 2100);
      } else if (cedula.valid === "false") {
        Swal.fire(
          "Cedula invalida",
          "Coloque una cedula con los suficientes caracteres validos",
          "question"
        );
        // setTimeout(() => {window.location.reload()}, 2500);
      } else if (cedula.length === 0) {
        alert("Please fill all the fields");
      }
    } catch (error) {
      navigate.push("/home");
      console.log("Error to Create a User", error);
    }
  };
  return (
    <>
      <div className={s.body}>
        <div className={s.container}>
          <svg
            id="Isolation_Mode"
            data-name="Isolation Mode"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 298.11 114.86"
            className={s.tape}
          >
            <path d="M288.67,91.56c-.22-4.95,3.61-9.15,8.57-9.37l-.37-8.3c-4.96,.22-9.15-3.62-9.37-8.57-.22-4.95,3.61-9.15,8.57-9.37l-.37-8.31c-4.95,.22-9.15-3.62-9.37-8.57-.22-4.96,3.62-9.15,8.57-9.37l-.37-8.31c-4.95,.22-9.15-3.62-9.37-8.57-.22-4.96,3.62-9.15,8.57-9.37l-.15-3.45L0,13.06l.16,3.44h0c4.96-.23,9.15,3.61,9.37,8.57,.22,4.95-3.62,9.15-8.57,9.37H.96l.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.58,.22,4.95-3.62,9.15-8.57,9.37h0l.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.57,.22,4.95-3.62,9.15-8.57,9.37h0s.37,8.3,.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.58,.22,4.95-3.62,9.15-8.57,9.38h0l.07,1.67,293.58-13.05-.08-1.67c-4.96,.21-9.15-3.62-9.37-8.58Z" />
          </svg>
          <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
            <label className={s.label}>
              Ya eres parte <br /> de la familia Kapolo
            </label>

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
            <div>
              <button className={s.btn} type="submit">
                INGRESA
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
