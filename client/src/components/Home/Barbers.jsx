import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBarbers } from "../../redux/actions";
import BarberCards from "./BarberCards.jsx";
import s from "../styles/Barbers.module.css";

export default function Barbers() {
  const allBarbers = useSelector((state) => state.barbers);
  const dispatch = useDispatch();
  const navigate = useHistory();

  console.log("allBarbers", allBarbers);

  useEffect(() => {
    dispatch(getBarbers());
  }, [dispatch]);

  const barberos = [
    {
      name: "Carlos",
      lastName: "Lopez",
      email: "soygay2@gmail.com",
      phone: "04247233456",
      available: true,
    },
    {
      name: "Marcos",
      lastName: "Torres",
      email: "soygay4@gmail.com",
      phone: "04243433456",
      available: true,
    },
  ];

  // [{name: "Carlos"}, {lastName: "Lopez"},{email: "soygay2@gmail.com"},{phone:"04247233456"},{available: true}]

  return (
    <>
      <div className={s.container}>
        {/* <div>{current.name}</div> */}
        <h1>Barbers</h1>
        {/* <h3>Hello</h3> */}
        <div className={s.containerCards}>
          {console.log(barberos)}
          {allBarbers.map((project, index) => {
            return <BarberCards key={index} {...project} />;
          })}
        </div>
        {/* <h5>{currentUserrr}</h5> */}
      </div>
    </>
  );
}
