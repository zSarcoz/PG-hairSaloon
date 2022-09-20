import React from "react";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({ name, prices, subtipos, sexo }) {
  return (
    <div className={sexo === "Consentidas" ? s.serviceCard : s.servicesCardMan}>
      <h1 className={s.name}>{name}</h1>
      <h3 className={s.price}>Desde: {prices[0]}$</h3>
      <h3 className={s.price}>Hasta: {prices[0]}$</h3>
      <h3 className={s.price}>{subtipos.join(", ")}</h3>
      {/* <p className={s.description}>{description}</p> */}
    </div>
  );
}
