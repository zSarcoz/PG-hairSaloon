import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../CartComponent/CartContext.jsx";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({
  id,
  name,
  prices,
  subtipos,
  sexo,
  image,
}) {
  const servicesInfo = { id, name, prices, subtipos, sexo, image };
  const { addProductToCart, deleteProductFromCart } = useContext(CartContext);
  const [touch, setTouch] = useState(false);
  return (
    <>
      {/* <button
        className={sexo === "Consentidas" ? s.serviceCard : s.servicesCardMan}
      >
        <img className={s.logosServices} src={image} alt="icon" />
        <h1 className={sexo === "Consentidas" ? s.name : s.nameM}>{name}</h1>
        <h3 className={sexo === "Consentidas" ? s.price : s.priceM}>Desde: ${prices[0]}</h3>
      </button> */}
      <div
        className={sexo === "Consentidas" ? s.serviceCard : s.servicesCardMan}
      >
        <button
          className={touch === true ? s.addCartBtnT : s.addCartBtn}
          onClick={() => {addProductToCart(servicesInfo), setTouch(true)}}
        >
          <img className={s.logosServices} src={image} alt="icon" />
          <h1 className={sexo === "Consentidas" ? s.name : s.nameM}>{name}</h1>
          <h3 className={sexo === "Consentidas" ? s.price : s.priceM}>
            Desde: ${prices[0]}
          </h3>
        </button>
        <button className={s.deleteCartBtn} onClick={() => {deleteProductFromCart(id), setTouch(false)}}>X</button>
      </div>
    </>
  );
}
