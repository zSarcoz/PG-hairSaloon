import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setServices } from "../../redux/actions";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Login from "../Forms/Login";
import s from "../styles/Landing.module.css";
import img from "../styles/img/logoPrincipal.png";
import fondo from "../styles/img/fondo.png";

export default function Landing() {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const [isShown, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setServices());
  }, []);

  const handleClick = (e) => {
    setIsShow((current) => !current);
    // navigate.push("/services");
  };

  return (
    <>
      {isShown && (
        <>
        <button onClick={handleClick} className={s.btnLogin}>X</button>
        <Login />
        </>
      )}
      {/* {isShown && console.log(isShown, setIsShow)} */}
      <div className={s.landing}>
        <img className={s.fondo} src={fondo} alt="FONDOS" />
        <h1 className={s.title}>Vive la experiencia</h1>
        <img className={s.img} src={img} alt="logo" />
        <h3 className={s.description}>
          Tenemos diferentes áreas de servicio
          <h3 className={s.description2}> para toda la familia</h3>
        </h3>
        <div className={s.botones}>
          <Link to="/register">
          <button className={s.btn}>Registrate</button>
          </Link>
          <button className={s.btn2} onClick={handleClick} >Inicia Sesion</button>
        </div>
      </div>
      {/* <div className={s.footerContainer}> */}
      <Footer />
      {/* </div> */}
    </>
  );
}
