import React from "react";

export default function ServicesCard({ name, price, description }) {
  return (
    <>
      <div>Services</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
    </>
  );
}
