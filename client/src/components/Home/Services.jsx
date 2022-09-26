import React, { useEffect,useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices, filterBySex, getUsers } from "../../redux/actions";
// import CartContext from "../CartComponent/CartContext.jsx";
import ServicesCard from "./ServicesCard";
import Footer from "./Footer";
import s from "../styles/Services.module.css";
import FondoAlto from "../styles/img/fondoAlto.png";
import Cart from "../CartComponent/Cart";
import {CartContext} from "../CartComponent/CartContext.jsx"
// import ItemCart from "../CartComponent/ItemCart.jsx";

export default function Services() {
  const {createUser} = useContext(CartContext);
  const allServices = useSelector((state) => state.services);
  const currentUser = useSelector((state) => state.currentUser);
  const userA = useSelector((state) => state.currentUserLocalStorage);
  console.log("Current user form services", currentUser);
  const filterSex = useSelector((state) => state.filterBySexo);
  // console.log("filter", filterSex);
  // console.log("allServices", allServices);
  const dispatch = useDispatch();
  const navigate = useHistory();
  /* Traemos del context la funcion para agregar un producto */
  // const { addServiceToCart, products } = useContext(CartContext);

  useEffect(() => {
    dispatch(setServices());
    dispatch(getServices());
    dispatch(getUsers());
    // dispatch(createUser(a))
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
              className={s.btn}
              onClick={() => handleOnclick("Consentidas")}
            >
              {/* • Consentidas • */}
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 200 200"
                className={s.btnC}
                // style="enable-background:new 0 0 200 200;"
                // xml:space="preserve"
              >
                <style type="text/css">
                  {/* .st0: {
                  {fill:#F97B51}
                  },
	                .st1{{fill:#FFFFFF}},
	                .st2{fill:#6C7287} */}
                </style>
                <g>
                  <g>
                    <path
                      className={s.st0}
                      d="M170,117.2c0,37.4-30.3,67.7-67.7,67.7c-37.4,0-67.7-30.3-67.7-67.7c0-37.4,30.3-67.7,67.7-67.7
			C139.7,49.5,170,79.8,170,117.2"
                    />
                    <path
                      class={s.st1}
                      d="M133.9,141.6l-24.4-17.9c8.6-8.6,16.5-19.6,18.7-32.3l-11.5-1.9c-1.8,10.5-8.8,19.8-16.5,27.1l-6.7-40.1
			l-11.5,1.9l7.8,46.8c-3.3,2.4-6.4,4.4-8.6,5.8c-7.2,4.4-10.1,13.4-6.8,20.9c2.1,4.7,8.3,9.5,14.2,9.5c0.3,0,0.6,0,0.8,0
			c6.9-0.5,10.5-3.9,12.3-6.5c4.4-6.4,2.5-14.8,1.9-16.9l-1.1-6.6l25.2,18.5L133.9,141.6z M92.3,148.3c-0.2,0.3-0.9,1.3-3.6,1.5
			c-0.9,0-3.1-1.7-3.6-2.7c-1-2.2,0-4.9,2.2-6.3c1.4-0.8,3-1.8,4.7-3l0.4,2.6l0.1,0.3C93.2,142.9,93.5,146.6,92.3,148.3"
                    />
                  </g>
                  <g>
                    <path
                      class={s.st2}
                      d="M8.3,112.8c-1.7-0.1-3-1.7-2.9-3.4c0.1-1.7,1.6-3,3.4-2.9c1.7,0.1,3,1.7,2.9,3.4
			C11.6,111.7,10.1,113,8.3,112.8z"
                    />
                    <path
                      className={s.st2}
                      d="M7.4,96.4c-5.9-1.9-8.8-7.8-6.8-13.8c0.9-2.9,2.8-5.2,5.3-6.4L6.8,78c-2.2,1.1-3.5,2.9-4.3,5.2
			C1,88,3.3,92.8,8.1,94.3c4.8,1.5,9.5-1,11-5.8c0.7-2.3,0.7-4.5-0.5-6.7l1.8-0.9c1.4,2.4,1.5,5.4,0.6,8.3
			C19.1,95.2,13.3,98.3,7.4,96.4z"
                    />
                    <path
                      className={s.st2}
                      d="M20.1,70.8c-3.9-2.7-4.7-7.4-2.1-11.2s7.3-4.7,11.2-2.1s4.7,7.4,2.1,11.2C28.7,72.5,24,73.5,20.1,70.8z
			 M28,59.3c-3.1-2.1-6.5-1.4-8.4,1.4c-1.9,2.8-1.3,6.3,1.8,8.4c3.1,2.1,6.5,1.4,8.4-1.4C31.7,64.8,31,61.4,28,59.3z"
                    />
                    <path
                      className={s.st2}
                      d="M47.3,39l5.8,7.1l-1.6,1.4l-5.7-6.9c-2.1-2.6-4.6-2.8-6.9-0.9c-2.6,2.2-2.9,5.2-0.6,7.9l5.3,6.4l-1.6,1.4
			L31.8,43.2l1.6-1.3l1.9,2.3c-0.3-2.2,0.6-4.4,2.7-6.2C40.9,35.5,44.4,35.5,47.3,39z"
                    />
                    <path
                      className={s.st2}
                      d="M59.5,40.1l0.2-1.9c1.6,0.4,3.8,0.2,5.9-0.7c2.7-1.3,3.4-2.7,2.8-4.1c-1.7-3.7-9.7,3.5-12.3-2.2
			c-1.1-2.4,0.1-5,3.8-6.7c1.9-0.9,4.1-1.3,5.7-1l-0.1,1.9c-1.7-0.3-3.3,0-4.8,0.7c-2.6,1.2-3.3,2.7-2.6,4.1
			c1.8,3.9,9.8-3.3,12.3,2.2c1.1,2.5-0.3,5.1-4,6.8C63.8,40.3,61.2,40.6,59.5,40.1z"
                    />
                    <path
                      className={s.st2}
                      d="M92.6,24l-13,2.4c0.8,3.2,3.7,4.9,7.1,4.3c1.9-0.4,3.5-1.3,4.4-2.9l1.4,1.1c-1.1,1.9-3.1,3.2-5.5,3.7
			c-4.9,0.9-8.8-1.8-9.6-6.4c-0.9-4.6,1.8-8.5,6.1-9.3c4.4-0.8,8.1,1.8,9,6.5C92.6,23.6,92.6,23.8,92.6,24z M79.3,24.9l11-2.1
			c-0.8-3-3.4-4.7-6.5-4.1C80.8,19.3,79,21.8,79.3,24.9z"
                    />
                    <path
                      className={s.st2}
                      d="M118.4,23l-0.8,9.1l-2.1-0.2l0.8-8.9c0.3-3.3-1.3-5.2-4.3-5.5c-3.4-0.3-5.7,1.6-6,5.2l-0.8,8.3l-2.1-0.2
			l1.4-15.8l2,0.2l-0.3,2.9c1.3-1.8,3.5-2.7,6.3-2.5C116.4,16,118.8,18.5,118.4,23z"
                    />
                    <path
                      className={s.st2}
                      d="M136,36.8c-1,0.4-2.4,0.4-3.5-0.1c-2.8-1-3.8-3.1-2.9-5.9l3.2-9l-2.7-0.9l0.6-1.7l2.7,0.9l1.1-3.3l2,0.7
			l-1.1,3.3l4.5,1.6l-0.6,1.7l-4.5-1.6l-3.1,8.9c-0.6,1.8,0,3,1.6,3.6c0.8,0.3,1.7,0.3,2.5,0L136,36.8z"
                    />
                    <path
                      className={s.st2}
                      d="M151.5,28l1.9,1.1l-7.8,13.8l-1.9-1.1L151.5,28z M153.6,23.4c0.4-0.7,1.3-1,2.1-0.5c0.8,0.4,1,1.3,0.6,2.1
			c-0.4,0.8-1.3,1-2.1,0.6C153.4,25,153.2,24.1,153.6,23.4z"
                    />
                    <path
                      className={s.st2}
                      d="M180.5,41.8l-15,16.5l-1.5-1.4l2.1-2.3c-2.4,0.7-4.8,0.1-6.7-1.7c-3.3-3-3.6-7.7-0.4-11.3s7.9-3.7,11.2-0.6
			c1.9,1.7,2.7,4,2.4,6.4l6.4-7L180.5,41.8z M169.2,51c2.5-2.7,2.3-6.3-0.2-8.5c-2.5-2.3-6-2.1-8.5,0.6c-2.5,2.7-2.3,6.3,0.2,8.5
			C163.2,53.9,166.7,53.8,169.2,51z"
                    />
                    <path
                      className={s.st2}
                      d="M186.8,71.5l-8.3,5.2l-1.1-1.7l2.1-1.3c-1.9,0-3.7-1-5.1-3.2c-1.9-3-1.5-5.9,0.8-7.3c2.1-1.3,4.6-1.1,7,2.8
			l2.7,4.3l0.8-0.5c2.3-1.4,2.7-3.5,1.2-6c-1.1-1.7-2.7-3-4.4-3.5l0.8-1.7c2,0.6,3.9,2.2,5.2,4.3C190.8,66.3,190.3,69.3,186.8,71.5z
			 M181.4,72.4l2.2-1.4l-2.6-4.2c-1.6-2.6-3.2-2.8-4.6-1.9c-1.6,1-1.7,2.8-0.4,5C177.3,71.9,179.2,72.8,181.4,72.4z"
                    />
                    <path
                      className={s.st2}
                      d="M183.8,83.8l1.9,0.4c-0.6,1.5-0.6,3.8,0,5.9c0.9,2.9,2.3,3.7,3.8,3.2c3.9-1.3-2.3-10,3.6-12
			c2.5-0.8,5,0.7,6.2,4.6c0.6,1.9,0.8,4.2,0.3,5.8l-1.9-0.4c0.5-1.6,0.3-3.3-0.2-4.9c-0.9-2.7-2.3-3.6-3.8-3.1
			c-4.1,1.3,2.2,10.1-3.6,12c-2.6,0.8-5-0.9-6.3-4.8C183.2,88,183.2,85.3,183.8,83.8z"
                    />
                    <path
                      className={s.st2}
                      d="M195.2,102.7c1.7-0.2,3.3,1,3.5,2.8c0.2,1.7-1,3.3-2.8,3.5c-1.7,0.2-3.3-1-3.5-2.8
			C192.2,104.5,193.4,102.9,195.2,102.7z"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <button
              className={s.btn}
              onClick={() => handleOnclick("Consentidos")}
            >
              {/* • Consentidos • */}
              {/* xmlns="<http://www.w3.org/2000/svg>" */}
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 200 200"
                className={s.btnC}
                // style="enable-background:new 0 0 200 200;"
                // xml:space="preserve"
              >
                {/* <style type="text/css"> */}
                {/* .st0{fill:#6C7287;}
	.st1{fill:#FFFFFF;} */}
                {/* </style> */}
                <g>
                  <g>
                    <path
                      className={s.st2}
                      d="M169.9,117.2c0,37.3-30.3,67.6-67.6,67.6s-67.6-30.3-67.6-67.6S65,49.6,102.3,49.6
			C139.6,49.6,169.9,79.8,169.9,117.2"
                    />
                    <path
                      className={s.st1}
                      d="M133.9,141.6l-24.3-17.9c8.6-8.6,16.5-19.5,18.6-32.3l-11.4-1.9c-1.8,10.5-8.8,19.8-16.4,27.1l-6.6-40
			l-11.4,1.9l7.8,46.7c-3.3,2.4-6.4,4.4-8.6,5.8c-7.2,4.4-10.1,13.4-6.7,20.9c2.1,4.7,8.3,9.5,14.2,9.5c0.3,0,0.5,0,0.8,0
			c6.9-0.5,10.5-3.8,12.3-6.5c4.4-6.4,2.5-14.8,1.9-16.9l-1.1-6.6l25.1,18.5L133.9,141.6z M92.3,148.3c-0.2,0.3-0.9,1.3-3.6,1.5
			c-0.9,0-3.1-1.7-3.6-2.7c-1-2.2,0-4.9,2.2-6.3c1.4-0.8,3-1.8,4.7-3l0.4,2.6l0.1,0.3C93.2,142.8,93.5,146.6,92.3,148.3"
                    />
                  </g>
                  <g>
                    <path
                      className={s.st2}
                      d="M8.5,113.4c-1.7-0.1-3-1.6-2.9-3.4s1.6-3,3.4-2.9c1.7,0.1,3,1.6,2.9,3.4C11.7,112.2,10.2,113.5,8.5,113.4z"
                    />
                    <path
                      className={s.st2}
                      d="M7.5,97c-5.9-1.9-8.8-7.7-6.9-13.7c0.9-2.9,2.7-5.3,5.2-6.4l0.9,1.8c-2.2,1.1-3.5,2.9-4.2,5.2
			C1,88.7,3.4,93.5,8.1,95c4.8,1.5,9.5-1,11-5.9c0.7-2.3,0.6-4.5-0.5-6.7l1.8-0.9c1.4,2.4,1.6,5.3,0.6,8.3
			C19.1,95.8,13.3,98.9,7.5,97z"
                    />
                    <path
                      className={s.st2}
                      d="M20,71.4c-3.9-2.6-4.7-7.3-2.1-11.2c2.6-3.8,7.3-4.8,11.1-2.2c3.9,2.6,4.8,7.3,2.2,11.2
			C28.6,73,23.8,74,20,71.4z M27.8,59.8c-3.1-2.1-6.5-1.4-8.4,1.4c-1.9,2.8-1.3,6.3,1.8,8.3c3.1,2.1,6.5,1.4,8.4-1.4
			C31.5,65.4,30.8,61.9,27.8,59.8z"
                    />
                    <path
                      className={s.st2}
                      d="M46.9,39.5l5.9,7l-1.6,1.4L45.5,41c-2.1-2.6-4.6-2.8-6.9-0.8c-2.6,2.2-2.9,5.2-0.6,7.9l5.3,6.4l-1.6,1.4
			L31.5,43.7l1.6-1.3l1.9,2.2c-0.4-2.2,0.6-4.4,2.7-6.2C40.6,36,44,36,46.9,39.5z"
                    />
                    <path
                      className={s.st2}
                      d="M59.1,40.5l0.2-1.9c1.6,0.4,3.8,0.2,5.8-0.8c2.7-1.3,3.4-2.7,2.7-4.1c-1.7-3.7-9.7,3.6-12.3-2.1
			c-1.1-2.3,0.1-5,3.7-6.7c1.9-0.9,4.1-1.3,5.7-1l-0.1,1.9c-1.7-0.3-3.3,0.1-4.8,0.8c-2.6,1.2-3.3,2.8-2.6,4.1
			c1.8,3.9,9.7-3.4,12.3,2.1c1.2,2.5-0.3,5.1-4,6.8C63.4,40.6,60.8,40.9,59.1,40.5z"
                    />
                    <path
                      className={s.st2}
                      d="M92.1,24.2l-13,2.5c0.9,3.2,3.8,4.9,7.1,4.2c1.9-0.4,3.4-1.4,4.4-3L92,29c-1,2.1-3,3.4-5.4,3.8
			c-4.8,0.9-8.8-1.7-9.7-6.3C76,21.9,78.6,18,83,17.2s8.1,1.8,9,6.4C92,23.8,92,24,92.1,24.2z M78.8,25.2l11-2.1
			c-0.9-3-3.5-4.7-6.5-4.1C80.3,19.5,78.5,22.1,78.8,25.2z"
                    />
                    <path
                      className={s.st2}
                      d="M117.8,23.1l-0.8,9.1l-2.1-0.2l0.8-8.9c0.3-3.3-1.3-5.2-4.3-5.4c-3.4-0.3-5.7,1.6-6,5.2l-0.7,8.3l-2.1-0.2
			l1.3-15.8l2,0.2l-0.2,2.9c1.3-1.8,3.5-2.7,6.2-2.5C115.7,16.1,118.2,18.5,117.8,23.1z"
                    />
                    <path
                      className={s.st2}
                      d="M135.5,36.7c-1,0.4-2.4,0.4-3.5,0c-2.8-1-3.8-3.1-2.9-5.9l3.1-9l-2.7-0.9l0.6-1.7l2.7,0.9l1.1-3.3l2,0.7
			l-1.1,3.3l4.5,1.6l-0.6,1.7l-4.5-1.6l-3.1,8.9c-0.6,1.8,0,3,1.6,3.6c0.8,0.3,1.7,0.3,2.5,0L135.5,36.7z"
                    />
                    <path
                      className={s.st2}
                      d="M150.9,27.8l1.9,1l-7.7,13.8l-1.9-1L150.9,27.8z M152.9,23.2c0.4-0.7,1.3-1,2.1-0.5c0.8,0.4,1,1.3,0.6,2
			c-0.4,0.8-1.3,1-2.1,0.6C152.8,24.9,152.5,23.9,152.9,23.2z"
                    />
                    <path
                      className={s.st2}
                      d="M179.9,41.4L165,58l-1.5-1.4l2.1-2.3c-2.4,0.7-4.8,0.1-6.7-1.6c-3.4-3-3.7-7.7-0.5-11.3s7.9-3.7,11.2-0.7
			c1.9,1.7,2.8,3.9,2.4,6.3l6.3-7.1L179.9,41.4z M168.7,50.7c2.5-2.8,2.2-6.3-0.2-8.5c-2.5-2.2-6-2.1-8.5,0.7s-2.2,6.3,0.3,8.5
			C162.7,53.6,166.3,53.5,168.7,50.7z"
                    />
                    <path
                      className={s.st2}
                      d="M177.6,60.7c4-2.5,8.6-1.4,11.1,2.6c2.5,3.9,1.4,8.6-2.5,11.1s-8.6,1.4-11.1-2.5
			C172.6,67.8,173.6,63.1,177.6,60.7z M185,72.5c3.1-2,3.9-5.4,2.1-8.2c-1.8-2.8-5.2-3.7-8.3-1.7c-3.1,2-3.9,5.4-2.1,8.3
			C178.5,73.8,181.9,74.4,185,72.5z"
                    />
                    <path
                      className={s.st2}
                      d="M183.9,84.3l1.9,0.4c-0.6,1.5-0.7,3.8,0,5.9c0.9,2.9,2.3,3.7,3.7,3.3c3.9-1.2-2.3-10,3.7-11.9
			c2.5-0.8,5,0.8,6.2,4.6c0.6,1.9,0.7,4.2,0.3,5.8l-1.9-0.4c0.5-1.6,0.4-3.3-0.1-4.8c-0.9-2.7-2.3-3.6-3.7-3.1
			c-4.1,1.3,2.1,10.1-3.7,11.9c-2.6,0.8-5-0.9-6.3-4.8C183.2,88.5,183.2,85.9,183.9,84.3z"
                    />
                    <path
                      className={s.st2}
                      d="M195.1,103.3c1.7-0.2,3.3,1,3.5,2.8c0.2,1.7-1,3.3-2.8,3.5c-1.7,0.2-3.3-1-3.5-2.8
			C192.1,105.1,193.3,103.5,195.1,103.3z"
                    />
                  </g>
                </g>
              </svg>
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
    </>
  );
}
