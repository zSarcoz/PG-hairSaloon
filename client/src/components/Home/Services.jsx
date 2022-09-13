import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices } from "../../redux/actions";
import ServicesCard from "./ServicesCard"

export default function Services() {

  const allServices = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const navigate = useHistory();

  console.log("allBarbers", allServices);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const services = [
    {
      name: "Cabello",
      description: "Fade low",
      price: 15,
    },
    {
      name: "Barba",
      description: "Deliniado",
      price: 10,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
    {
      name: "Exfoliación",
      description: "Mascarilla",
      price: 8,
    },
  ];

  return (
    <>
      {/* <div> */}
      {allServices.map((project, index) => {
            return <ServicesCard key={index} {...project} />;
          })}
      {/* </div> */}
    </>
  );
}
