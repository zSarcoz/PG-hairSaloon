import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers } from "../../redux/actions";
import s from "../styles/BarberCards.module.css";

export default function BarberCards({
  name,
  lastName,
  email,
  phone,
  available,
}) {
  return (
    <>
      {/* <div>{current.name}</div> */}
      {/* <h1>que pedooooooo</h1> */}
      <div className={s.cardContainer}>
        <h3>{name}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{available? available = "Estoy disponible" : "No estoy disponible"}</h3>
      </div>

      {/* <h5>{currentUserrr}</h5> */}
    </>
  );
}
