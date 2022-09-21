import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices, filterBySex } from "../../redux/actions";
import ServicesCard from "./ServicesCard";
import s from "../styles/Services.module.css";

export default function Services() {
  const allServices = useSelector((state) => state.services);
  const filterSex = useSelector((state) => state.filterBySexo);
  console.log("filter", filterBySex);
  console.log("allServices", allServices);
  const dispatch = useDispatch();
  const navigate = useHistory();

  useEffect(() => {
    dispatch(setServices());
    dispatch(getServices());
  }, [dispatch]);
  let mujeres = allServices.filter((service) => service.sexo === "Consentidas");
  let hombres = allServices.filter((service) => service.sexo === "Consentidos");

  function handleOnclick(value) {
    console.log("button value", value);
    if (value === "Consentidas") {
      // return mujeres
      dispatch(filterBySex(mujeres));
      console.log("Mujeres: ", mujeres);
    } else {
      // return hombres
      dispatch(filterBySex(hombres));
      console.log("Hombres: ", hombres);
    }
  }

  return (
    <div className={s.container}>
      {/* <div> */}
      <div className={s.botones}>
        <button className={s.btn} onClick={() => handleOnclick("Consentidas")}>
          Consentidas
        </button>
        <button className={s.btn} onClick={() => handleOnclick("Consentidos")}>
          Consentidos
        </button>
      </div>
      <div className={s.cards}>
        {/* {filterBySex
          ? filterSex?.map((project, index) => {
              return <ServicesCard key={index} {...project} />;
            })
          : allServices.map((project, index) => {
              console.log(project)
              return <ServicesCard key={index} {...project} />;
            })} */}
            {
              filterSex?.map((project, index) => {
                console.log(project)
                return <ServicesCard key={index} {...project} />;
              })
            }
      </div>
    </div>
  );
}
