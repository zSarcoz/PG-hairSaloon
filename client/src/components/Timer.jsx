import React, { useEffect, useState } from "react";
import s from "./styles/Timer.module.css"


export default function Timer(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    var timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
        },1000)

        return ()=> clearInterval(timer);
    });

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    }

    const stop = () => {
        clearInterval(timer);
    }

    // const start = () => {
    //     setSeconds(seconds);
    //     setMinutes(minutes);
    // }

    return (
    //     <div class="body-wrapper">
    //     <div class="ltn__coming-soon-area ltn__primary-bg text-color-white">
    //       <div class="container">
    //         <div class="row">
    //           <div class="col-lg-12">
    //             <div class="coming-soon-inner">
    //               <div class="section-title-area ltn__section-title-2">
    //                 <h6 class="section-subtitle ltn__secondary-color">
    //                   // Welcome to our company
    //                 </h6>
    //                 <h1 class="section-title white-color">We Are Coming Soon</h1>
    //                 <h5 class="ltn__secondary-color">January 01, 2021</h5>
    //               </div>
    //               <div
    //                 class="ltn__countdown mb-20"
    //                 data-countdown="2021/01/01"
    //               ></div>
  
    //               <div class="ltn__newsletter-inner mt-50">
    //                 <h3>Notify me when we launch</h3>
    //                 <form action="#" class="ltn__form-box">
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     placeholder="Your E-mail..."
    //                   />
    //                   <button type="submit" class="btn theme-btn-1 btn-effect-1">
    //                     SUBMIT
    //                   </button>
    //                 </form>
    //               </div>
    //               <div class="btn-wrapper mt-50">
    //                 <a
    //                   href="contact.html"
    //                   class="btn theme-btn-2 btn-effect-2 text-uppercase"
    //                 >
    //                   Contact Us
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> 
        <div className={s.timer}>
            <div className={s.container}>
                <div className={s.timer_container}>
                    <h1>Timer</h1>
                    <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
                    <button className={s.restart} onClick={restart}>Restart</button>
                    <button className={s.stop} onClick={stop}>Stop</button> 
                    {/* <button className={s.start} onClick={start}>Start</button> */}
                </div>
            </div>
        </div>

    )
}