import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers } from "../../redux/actions";
import s from "../styles/BarberCards.module.css";
import imgBarber from "../styles/img/barber.jpg";

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
        <img className={s.img} src={imgBarber} alt="barber img" />
        <div className={s.intro}>
          <h1 className={s.title}>{name}</h1>
          <p className={s.text}>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit officia perferendis repellat. Consectetur incidunt ad
            aliquid magni qui esse. Quia, voluptatibus dolorem nemo deserunt
            tempore commodi totam omnis aliquam? */}
            <span>
              {name} {lastName}
            </span>
            <span>Email: <br/>{email}</span>
            <span>Telefono: {phone}</span>
            <span>
              {available
                ? (available = "Estoy disponible")
                : "No estoy disponible"}
            </span>
          </p>
        </div>
      </div>

      {/* <h5>{currentUserrr}</h5> */}
    </>
  );
}
