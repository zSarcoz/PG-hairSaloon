import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setServices } from "../../redux/actions";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Login from "../Forms/Login";
import s from "../styles/Landing.module.css";
import img from "../styles/img/logoPrincipal.png";

export default function Landing() {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const [isShown, setIsShow] = useState(false)

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setServices());
  }, []);

  const handleClick = (e) => {
    setIsShow(current => !current)
    // navigate.push("/services");
  };

  return (
    <>
    {isShown && <Login />}
      <div className={s.landing}>
        <h1 className={s.title}>Vive la experiencia</h1>
        <img className={s.img} src={img} alt="logo" />
        <h3 className={s.description}>
          Tenemos diferentes áreas de servicio para toda la familia
        </h3>
        <div className={s.botones}>
          <Link to="/register">
            <button className={s.btn}>Registrate</button>
          </Link>
          <button className={s.btn2} onClick={handleClick}>
            Inicia Sesion
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
