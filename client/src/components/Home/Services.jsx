import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices, filterBySex } from "../../redux/actions";
import ServicesCard from "./ServicesCard";
import s from "../styles/Services.module.css";

export default function Services() {
  const allServices = useSelector((state) => state.services);
  const currentUser = useSelector((state) => state.currentUser);
  console.log("Current user form services", currentUser);
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
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292.92 292.92"
          >
            <path
              style={{fill: "#F97B51"}}
              d="M292.92,146.46c0,80.89-65.57,146.46-146.46,146.46S0,227.35,0,146.46,65.57,0,146.46,0s146.46,65.57,146.46,146.46"
            />
            <path
              style={{fill: "white"}}
              class="cls-1"
              d="M214.93,199.27l-52.72-38.79c18.67-18.54,35.73-42.32,40.36-69.94l-24.77-4.15c-3.81,22.74-19.02,42.87-35.6,58.7l-14.4-86.72-24.77,4.11,16.81,101.24c-7.21,5.29-13.76,9.52-18.7,12.53-15.59,9.49-21.87,28.94-14.61,45.23,4.5,10.1,17.96,20.63,30.75,20.63,.59,0,1.19-.02,1.78-.07,14.85-1.17,22.69-8.33,26.65-14.13,9.45-13.85,5.41-32,4.16-36.63l-2.38-14.34,54.42,40.04,13.02-17.7Zm-90,14.51c-.47,.68-1.9,2.75-7.74,3.21-1.99-.1-6.69-3.6-7.73-5.74-2.1-4.71-.02-10.66,4.73-13.56,2.95-1.79,6.4-3.97,10.19-6.52l.96,5.71,.21,.71c1.26,4.34,1.93,12.48-.62,16.18"
            />
          </svg>
        </button>
        <button className={s.btn} onClick={() => handleOnclick("Consentidos")}>
          Consentidos
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292.92 292.92"
          >
            <path
              style={{fill: "#6C7287"}}
              d="M292.92,146.46c0,80.89-65.57,146.46-146.46,146.46S0,227.35,0,146.46,65.57,0,146.46,0s146.46,65.57,146.46,146.46"
            />
            <path
              style={{fill: "white"}}
              class="cls-1"
              d="M214.93,199.27l-52.72-38.79c18.67-18.54,35.73-42.32,40.36-69.94l-24.77-4.15c-3.81,22.74-19.02,42.87-35.6,58.7l-14.4-86.72-24.77,4.11,16.81,101.24c-7.21,5.29-13.76,9.52-18.7,12.53-15.59,9.49-21.87,28.94-14.61,45.23,4.5,10.1,17.96,20.63,30.75,20.63,.59,0,1.19-.02,1.78-.07,14.85-1.17,22.69-8.33,26.65-14.13,9.45-13.85,5.41-32,4.16-36.63l-2.38-14.34,54.42,40.04,13.02-17.7Zm-90,14.51c-.47,.68-1.9,2.75-7.74,3.21-1.99-.1-6.69-3.6-7.73-5.74-2.1-4.71-.02-10.66,4.73-13.56,2.95-1.79,6.4-3.97,10.19-6.52l.96,5.71,.21,.71c1.26,4.34,1.93,12.48-.62,16.18"
            />
          </svg>
        </button>
      </div>
      <div className={s.cards}>
        {filterSex?.map((project, index) => {
          console.log(project);
          return <ServicesCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
}
