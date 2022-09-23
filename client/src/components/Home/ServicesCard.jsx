import React from "react";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({ name, prices, subtipos, sexo, image }) {
  console.log(image);
  // console.log(name, prices, subtipos, sexo)
  return (
    <>
      
      <button
        className={sexo === "Consentidas" ? s.serviceCard : s.servicesCardMan}
      >
        <img className={s.logosServices} src={image} alt="icon" />
        <h1 className={sexo === "Consentidas" ? s.name : s.nameM}>{name}</h1>
        <h3 className={sexo === "Consentidas" ? s.price : s.priceM}>Desde: ${prices[0]}</h3>
      </button>
    </>
  );
}
