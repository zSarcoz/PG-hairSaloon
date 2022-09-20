import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getServices, setServices } from "../../redux/actions";
import ServicesCard from "./ServicesCard"

export default function Services() {

  const allServices = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const navigate = useHistory();

  console.log("allBarbers", allServices);

  useEffect(() => {
    dispatch(setServices())
    dispatch(getServices());
  }, [dispatch]);

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
