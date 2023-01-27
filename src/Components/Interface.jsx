import React from "react";
import Headers from "./Headers";
import Interface1 from "../assets/Images/interface1.png";
import Interface2 from "../assets/Images/interface2.png";

function Interface() {
  return (
    <div id="interface">
      <Headers />
      <div className="box">
        <img src={Interface1} alt="" width={1000} />
      </div>
      <div className="box2">
        <img src={Interface2} alt="" width={1000} />
      </div>
    </div>
  );
}

export default Interface;
