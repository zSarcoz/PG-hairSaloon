import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers, currentBarber } from "../../redux/actions";
import { CartContext } from "../CartComponent/CartContext.jsx";
import s from "../styles/BarberCards.module.css";
import barbersImage from "../styles/SVG/barbersImage.svg";

export default function BarberCards({
  id,
  name,
  lastName,
  cedula,
  email,
  phone,
  available,
  checkIn,
}) {
  const { saveBarber } = useContext(CartContext);

  const dispatch = useDispatch();
  const [barberSelected, setBarberSelected] = useState([]);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    dispatch(getBarbers());
  }, [dispatch]);

  const handleSelect = async function (barber) {
    setBarberSelected(barber);
    console.log("soy barber hp", barber);
  };
  const { addProductToCart, deleteProductFromCart } = useContext(CartContext);
  const barberInfo = {
    id,
    name,
    lastName,
    cedula,
    email,
    phone,
    available,
    checkIn,
  };
  return (
    <>
      {/* <div>{current.name}</div> */}
      {/* <h1>que pedooooooo</h1> */}
      <div className={s.cardContainer}>
        {available === false ? "" : touch === true ? (
          <button
            onClick={() => {
              setTouch(false);
            }}
            className={s.btnx}
          >
            X
          </button>
        ) : (
          ""
        )}
        <button
          className={
            available === true && touch === true ? s.btnSelectT : s.btnSelect
          }
          onClick={() => {
            // addProductToCart(barberInfo), 
            saveBarber(barberInfo);
            // handleSelect(barberInfo),
            setTouch(true);
          }}
        >
          <img className={s.img} src={barbersImage} alt="barber img" />
          <div className={s.intro}>
            <h1 className={s.title}>{name}</h1>
            <p className={s.text}>
              {/* <span>
              {name} {lastName}
            </span> */}
              <span>
                {available === true
                  ? (available = "Estoy disponible")
                  : "No estoy disponible"}
              </span>
            </p>
          </div>
          <button className={available === false ? s.btn : s.btnT}></button>
        </button>
      </div>

      {/* <h5>{currentUserrr}</h5> */}
    </>
  );
}
