import React from "react";
import Headers from "./Headers";
import Perfectly1 from "../assets/Images/perfectly1.png";
import Perfectly2 from "../assets/Images/perfectly2.png";

function Perfectly() {
  return (
    <div id="perfectly">
      <Headers />
      <div className="boxp2">
        <img src={Perfectly1} alt="" />
      </div>
      <div className="boxp">
        <img src={Perfectly2} alt="" className="img2" width={1000} />
      </div>
    </div>
  );
}

export default Perfectly;
