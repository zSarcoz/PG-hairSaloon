import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setServices } from "../redux/actions";
import Footer from "./Footer";
import s from "./styles/Landing.module.css";
import img from "./styles/img/logoPrincipal.png";

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setServices());
  }, []);

  return (
    <>
      <div className={s.landing}>
        <h1 className={s.title}>Vive la experiencia</h1>
        <img className={s.img} src={img} alt="logo" />
        <h3 className={s.description}>
          Tenemos diferentes áreas de servicio para toda la familia
        </h3>
        <div className={s.botones}>
          <button className={s.btn}>Registrate</button>
          <button className={s.btn}>Inicia Sesion</button>
        </div>
      </div>
      {/* <div className={s.footerContainer}> */}
      <Footer />
      {/* </div> */}
    </>
  );
}
