import React from "react";
import s from "../styles/Footer.module.css";

export default function Footer({ color }) {
  return (
    <>
      <div className={s.container}></div>
      <div className={s.footer} style={{ "background-color": color }}>
        <h2>
          {/* <i class="bx bxl-instagram"></i> */}
          {/* <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style={{height: "40px"}}
            // style="enable-background:new 0 0 50 50;"
            // xml:space="preserve"
          >
            <g>
              <path
                style={{fill: "#FCF6F0"}}
                class="st0"
                d="M25,17.7c-4,0-7.3,3.3-7.3,7.3s3.3,7.3,7.3,7.3c4,0,7.3-3.3,7.3-7.3S29,17.7,25,17.7z"
              />
              <path
              style={{fill: "#FCF6F0"}}
                class="st0"
                d="M32.2,10.1H17.8c-4.7,0-8.6,3.9-8.6,8.6v12.7c0,4.7,3.9,8.6,8.6,8.6h14.4c4.7,0,8.6-3.9,8.6-8.6V18.6
		C40.8,13.9,37,10.1,32.2,10.1z M25,35.8c-6,0-10.8-4.8-10.8-10.8c0-6,4.8-10.8,10.8-10.8c6,0,10.8,4.8,10.8,10.8
		C35.8,31,31,35.8,25,35.8z M35.2,17.6c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6
		C37.8,16.4,36.6,17.6,35.2,17.6z"
              />
              <path
              style={{fill: "#FCF6F0"}}
                class="st0"
                d="M41.5,0H8.5C3.8,0,0,3.8,0,8.5v32.9C0,46.2,3.8,50,8.5,50h32.9c4.7,0,8.5-3.8,8.5-8.5V8.5
		C50,3.8,46.2,0,41.5,0z M44.3,31.4c0,6.7-5.4,12.1-12.1,12.1H17.8c-6.7,0-12.1-5.4-12.1-12.1V18.6c0-6.7,5.4-12.1,12.1-12.1h14.4
		c6.7,0,12.1,5.4,12.1,12.1V31.4z"
              />
            </g>
          </svg> */}
          Kapolo
        </h2>
        <h2>
          
          Kapolo Family Care
        </h2>
      </div>
    </>
  );
}
