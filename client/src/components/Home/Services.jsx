import React from "react";
import ServicesCard from "./ServicesCard"

export default function Services() {
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
  ];

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
      {services.map((project, index) => {
            return <ServicesCard key={index} {...project} />;
          })}
      </div>
    </>
  );
}
