import React, { useEffect, useContext, useState } from "react";
import s from "../styles/AlertOrder.module.css";
import { CartContext } from "../CartComponent/CartContext.jsx";

export default function AlertSuccess() {
  const { barber } = useContext(CartContext);
  console.log(barber);
  const selectBarber = barber.map((b) => {
    return b.name + " " + b.lastName
  })
  console.log(selectBarber)

  return (
    <>
      <div className={s.body}>
        {/* <img src={SVG} alt="svg" /> */}
        <div className={s.container}>
          <svg
            id="Isolation_Mode"
            data-name="Isolation Mode"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 298.11 114.86"
            className={s.tape}
          >
            <path d="M288.67,91.56c-.22-4.95,3.61-9.15,8.57-9.37l-.37-8.3c-4.96,.22-9.15-3.62-9.37-8.57-.22-4.95,3.61-9.15,8.57-9.37l-.37-8.31c-4.95,.22-9.15-3.62-9.37-8.57-.22-4.96,3.62-9.15,8.57-9.37l-.37-8.31c-4.95,.22-9.15-3.62-9.37-8.57-.22-4.96,3.62-9.15,8.57-9.37l-.15-3.45L0,13.06l.16,3.44h0c4.96-.23,9.15,3.61,9.37,8.57,.22,4.95-3.62,9.15-8.57,9.37H.96l.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.58,.22,4.95-3.62,9.15-8.57,9.37h0l.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.57,.22,4.95-3.62,9.15-8.57,9.37h0s.37,8.3,.37,8.3h0c4.95-.22,9.15,3.62,9.37,8.58,.22,4.95-3.62,9.15-8.57,9.38h0l.07,1.67,293.58-13.05-.08-1.67c-4.96,.21-9.15-3.62-9.37-8.58Z" />
          </svg>
          {/* {barber[0]?.map((b) => { */}
            <form className={s.form}>
              <label className={s.label}>
                Pronto <br />
                será atendido por
              </label>
              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#824B62",
                  fontSize: "30px",
                }}
              >
                Nombre: {selectBarber}
              </span>
              <label className={s.label}>Tiempo de espera</label>
              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#824B62",
                  fontSize: "30px",
                }}
              >
                Tiempo Aprox
              </span>
            </form>;
          {/* })} */}
        </div>
      </div>
    </>
  );
}
