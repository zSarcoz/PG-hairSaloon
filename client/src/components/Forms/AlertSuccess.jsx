import React from "react";
import s from "../styles/AlertSuccess.module.css";
import imgscs from "../styles/img/successIcon.png"
import SVG from "../styles/svg/FONDOS-02.svg"

export default function AlertSuccess() {
  return (
    <>
      <div className={s.body}>
        <img src={SVG} alt="svg" />
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
          <form className={s.form}>
            <label className={s.label}>
              Ya eres parte <br /> de nuestra familia
            </label>
            <img className={s.img} src={imgscs} alt="icon" />
          </form>
        </div>
      </div>
    </>
  );
}
