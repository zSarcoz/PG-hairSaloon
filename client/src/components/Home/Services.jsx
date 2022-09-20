import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices } from "../../redux/actions";
import ServicesCard from "./ServicesCard";
import s from "../styles/Services.module.css";

export default function Services() {
  const allServices = useSelector((state) => state.services);
  console.log("allServices", allServices)
  const dispatch = useDispatch();
  const navigate = useHistory();

  useEffect(() => {
    dispatch(setServices());
    dispatch(getServices());
  }, [dispatch]);

  function handleOnclick(value){
    if(value === "Consentidas"){
      let mujeres = allServices.filter(service => service.sexo === "Consentidas")
      console.log("Mujeres: ",mujeres)
    }else{
      let hombres = allServices.filter(service => service.sexo === "Consentidos")
      console.log("Hombres: ",hombres)
    }
  }

  return (
    <div className={s.container}>
      {/* <div> */}
      <div className={s.botones}>
        <button className={s.btn} value="Consentidas" onClick={() => handleOnclick()}>Consentidas</button>
        <button className={s.btn} value="Consentidos" onClick={() => handleOnclick()}>Consentidos</button>
      </div>
      <div className={s.cards}>
        {allServices.map((project, index) => {
          return <ServicesCard key={index} {...project} />;
        })}
        {/* </div> */}
      </div>
    </div>
  );
}
