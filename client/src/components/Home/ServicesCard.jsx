import React from "react";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({ name, prices, subtipos }) {
  return (
    <div className={s.serviceCard}>
      <h1 className={s.name}>{name}</h1>
      <h3 className={s.price}>{prices.join(", ")}$</h3>
      <p className={s.description}>{subtipos.join(", ")}</p>
    </div>
  );
}
