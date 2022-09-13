import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, currentUser, setServices } from "../../redux/actions";
import Barbers from "./Barbers";
import Services from "./Services";
import s from "../styles/Home.module.css";

export default function Home() {
  const current = useSelector((state) => state.currentUser);
  let currentUserrr = current.map((user) => user.name);
  console.log(currentUserrr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // dispatch(setServices());
    // dispatch(currentUser())
  }, []);

  return (
    <>
      {/* <div>{current.name}</div> */}
      <h1>HOME</h1>
      <h3>Hello</h3>
      {currentUserrr ? <h5>{currentUserrr}</h5> : <h5>No Name</h5>}
      <h1 className="text-3xl font-bold underline">Servicios</h1>
      <div className={s.divService}>
        <Services />
      </div>
      <div className={s.divService}>
        <Barbers />
      </div>
      {/* <h5>{currentUserrr}</h5> */}
    </>
  );
}
