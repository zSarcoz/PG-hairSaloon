import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setServices } from "../redux/actions";
import Footer from "./Footer";
// import s from "./styles/Landing.module.css";

export default function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(setServices());
  }, []);

  return (
    <>
      <h1>Landing Page</h1>
      <h3>Iniciar sesion | registrate</h3>
      <Footer/>
    </>
  );
}
