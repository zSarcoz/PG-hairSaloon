import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices, filterBySex } from "../../redux/actions";
// import CartContext from "../CartComponent/CartContext.jsx";
import ServicesCard from "./ServicesCard";
import Footer from "./Footer";
import s from "../styles/Services.module.css";
import FondoAlto from "../styles/img/fondoAlto.png";
import consentidas from "../styles/SVG/CONSENTIDAS-01.svg"
import consentidos from "../styles/SVG/CONSENTIDOS-02.svg"

export default function Services() {
  const allServices = useSelector((state) => state.services);
  const currentUser = useSelector((state) => state.currentUser);
  console.log("Current user form services", currentUser);
  const filterSex = useSelector((state) => state.filterBySexo);
  console.log("filter", filterSex);
  console.log("allServices", allServices);
  const dispatch = useDispatch();
  const navigate = useHistory();
    /* Traemos del context la funcion para agregar un producto */
    // const { addServiceToCart, products } = useContext(CartContext);

  useEffect(() => {
    dispatch(setServices());
    dispatch(getServices());
  }, [dispatch]);
  let mujeres = allServices.filter((service) => service.sexo === "Consentidas");
  let hombres = allServices.filter((service) => service.sexo === "Consentidos");

  function handleOnclick(value) {
    console.log("button value", value);
    if (value === "Consentidas") {
      // return mujeres
      dispatch(filterBySex(mujeres));
      console.log("Mujeres: ", mujeres);
    } else {
      // return hombres
      dispatch(filterBySex(hombres));
      console.log("Hombres: ", hombres);
    }
  }

  return (
    <>
    {/* {!currentUser.length ? navigate.push('/') : ( */}
      {/* <> */}
      <div className={s.body}>
        <div className={s.container}>
          <div className={s.fondoImgSwd}>
            <img src={FondoAlto} alt="fondo" className={s.fondoImg} />
          </div>
          <h1 className={s.title}>Nuestros Servicios</h1>
          <h3 className={s.subtitle}>¿Que te vas hacer hoy?</h3>
          {/* <div> */}
          <div className={s.botones}>
            <button
              className={s.btn}
              onClick={() => handleOnclick("Consentidas")}
            >
              {/* • Consentidas • */}
              <img className={s.btnC} src={consentidas} alt="icon" />
            </button>
            <button
              className={s.btn}
              onClick={() => handleOnclick("Consentidos")}
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
                console.log(project);
                return <ServicesCard key={index} {...project} />;
              })}
            </div>
          )}
        </div>
      </div>
      <Footer color={"#6C7287"} />
      {/* </> */}
    {/* // )} */}
      
    </>
  );
}
