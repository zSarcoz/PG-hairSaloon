import React from "react";
import s from "../styles/ServicesCard.module.css";

export default function ServicesCard({ name, price, description }) {
  return (
    <div className={s.serviceCard}>
      <h1 className={s.name}>{name}</h1>
      <h3 className={s.price}>{price}$</h3>
      <p className={s.description}>{description}</p>
    </div>
  );
}
