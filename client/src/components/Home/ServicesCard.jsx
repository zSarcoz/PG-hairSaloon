import React from "react";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({ name, prices, subtipos, sexo, image }) {
  console.log(image);
  // console.log(name, prices, subtipos, sexo)
  return (
    <>
      <div
        className={sexo === "Consentidas" ? s.serviceCard : s.servicesCardMan}
      >
        <h1 className={s.name}>{name}</h1>
        <h3 className={s.price}>Desde: {prices[0]}$</h3>
        <img src={image} alt="icon" />
      </div>
    </>
  );
}
