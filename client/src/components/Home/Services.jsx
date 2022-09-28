import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getServices,
  setServices,
  filterBySex,
  getUsers,
} from "../../redux/actions";
// import CartContext from "../CartComponent/CartContext.jsx";
import ServicesCard from "./ServicesCard";
import Footer from "./Footer";
import s from "../styles/Services.module.css";
import FondoAlto from "../styles/img/fondoAlto.png";
import consentidas from "../styles/SVG/CONSENTIDAS-01.svg";
import consentidos from "../styles/SVG/CONSENTIDOS-02.svg";
import Cart from "../CartComponent/Cart";
import { CartContext } from "../CartComponent/CartContext.jsx";
// import ItemCart from "../CartComponent/ItemCart.jsx";

export default function Services() {
  const { createUser, users, products } = useContext(CartContext);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [touch, setTouch] = useState(false);
  const [touch1, setTouch1] = useState(false);
  
  const allServices = useSelector((state) => state.services);
  const currentUser = useSelector((state) => state.currentUser);  
  const filterSex = useSelector((state) => state.filterBySexo);
  const dispatch = useDispatch();
  const navigate = useHistory();

  useEffect(() => {
    dispatch(setServices());
    dispatch(getServices());
    dispatch(getUsers());
    createUser(currentUser[0]);
    setTimeout(() => {
      setIsDisplayed(true);
    }, 250)
  }, [dispatch]);
  let mujeres = allServices.filter((service) => service.sexo === "Consentidas");
  let hombres = allServices.filter((service) => service.sexo === "Consentidos");
  console.log("Usuario", users);

  function handleOnclick(value) {
    // console.log("button value", value);
    if (value === "Consentidas") {
      // return mujeres
      dispatch(filterBySex(mujeres));
      // console.log("Mujeres: ", mujeres);
    } else {
      // return hombres
      dispatch(filterBySex(hombres));
      // console.log("Hombres: ", hombres);
    }
  }

  return (
    <>
      {!isDisplayed ? (
        <></>
      ) : !users.length ? (
        navigate.push("/")
      ) : ( 
        <>
          <div className={s.body}>
            <Cart />
            <div className={s.container}>
              <div className={s.fondoImgSwd}>
                <img src={FondoAlto} alt="fondo" className={s.fondoImg} />
              </div>
              <h1 className={s.title}>Nuestros Servicios</h1>
              <h3 className={s.subtitle}>¿Que te vas hacer hoy?</h3>
              {/* <div> */}
              <div className={s.botones}>
                <button
                  className={touch === true ? s.btnT : s.btn}
                  onClick={() => {handleOnclick("Consentidas"), setTouch(true), setTouch1(false)}} 
                >
                  {/* • Consentidas • */}
                  <img className={s.btnC} src={consentidas} alt="icon" />
                </button>
                <button
                  className={touch1 === true ? s.btnT : s.btn}
                  onClick={() => {handleOnclick("Consentidos"), setTouch1(true), setTouch(false)}}
                >
                  {/* • Consentidos • */}
                  {/* xmlns="<http://www.w3.org/2000/svg>" */}
                  <img className={s.btnC} src={consentidos} alt="icon" />
                </button>
              </div>
              {!filterSex.length ? (
                ""
              ) : (
                <div className={s.cards}>
                  {filterSex?.map((project, index) => {
                    // console.log(project);
                    return <ServicesCard key={index} {...project} />;
                  })}
                </div>
              )}
            </div>
          </div>
          <Footer color={"#6C7287"} />
        </>
      )}
    </>
  );
}
