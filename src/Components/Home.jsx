import React from "react";
import Playmarket from "../assets/Images/playmarket.png";
import Appstore from "../assets/Images/playstore.png";
import Phone from "../assets/Images/phone.png";

function Home() {
  return (
    <div id="homepage" className="container flex">
      <div className="portion1">
        <div className="box">
          <h1>A Great App Makes Your Life Better</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <h3>Download App Now</h3>
          <div className="flex">
            <img src={Playmarket} alt="" />
            <img src={Appstore} alt="" />
          </div>
        </div>
      </div>
      <div className="portion2">
        <img src={Phone} alt="" width={450} />
      </div>
    </div>
  );
}

export default Home;
