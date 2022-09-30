import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBarbers, currentBarber } from "../../redux/actions";
import BarberCards from "./BarberCards.jsx";
import header from "../styles/SVG/headerBarbers.svg";
import Footer from "./Footer";
import s from "../styles/Barbers.module.css";
import AlertOrder from "../Forms/AlertOrder"

export default function Barbers() {
  const allBarbers = useSelector((state) => state.barbers);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useHistory();
  const [isShown, setIsShow] = useState(false);


  console.log("allBarbers", allBarbers);

  useEffect(() => {
    dispatch(getBarbers());
  }, [dispatch]);

  const handleClick = (e) => {
    setIsShow((current) => !current);
    // navigate.push("/services");
  };
  const handleSubmit = (e) => {
    setTimeout(() => {
      navigate.push("/")
      window.localStorage.clear()
    }, 2500)
  }

  return (
    <>
       {isShown && (
        <>
        <button onClick={handleSubmit} className={s.btnLogin}>OK</button>
        <AlertOrder />
        </>
      )}
      <div className={allBarbers.length ? s.body1 : s.body}>
        <div className={s.container}>
          {/* <div>{current.name}</div> */}
          {/* <h1>Barbers</h1> */}
          <img className={s.header} src={header} alt="header" />
          {/* <img style={{position: "relative", marginTop: "-5%"}} src={barbersImage} alt="barber" /> */}

          {/* <h3>Hello</h3> */}
          <h1 className={s.title}>Nuestro Equipo</h1>
          <h3 className={s.subtitle}>¿Quién te va atender?</h3>
          <h3 className={s.text}>Selecciona uno de tu preferencia</h3>
          {/* {console.log(barberos)} */}
          {/* {allBarbers.map((project, index) => {
            return <BarberCards key={index} {...project} />;
          })} */}
          {!allBarbers.length ? (
            ""
          ) : (
            <>
              <div className={s.containerCards}>
                {allBarbers?.map((project, index) => {
                  // console.log(project);
                  return <BarberCards key={index} {...project} />;
                })}
              </div>
              <button className={s.btn} onClick={handleClick}>OK</button>
            </>
          )}
          {/* <h5>{currentUserrr}</h5> */}
        </div>
        <Footer color={"#F97B51"} />
      </div>
    </>
  );
}
