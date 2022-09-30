import React from "react";
import s from "../styles/Footer.module.css";

export default function Footer({color}) {
  return (
    <>
      <div className={s.footer} style={{backgroundColor: color}}>
      
        <h2><i class='bx bxl-instagram'></i> Kapolofc</h2>
       
        <h2>  <i class='bx bxl-facebook-square'></i>Kapolo Family Care</h2>
      </div>
    </>
  );
}
