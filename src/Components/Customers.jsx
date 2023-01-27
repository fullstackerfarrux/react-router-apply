import React from "react";
import Headers from "./Headers";
import Customer from "../assets/Images/customer.png";

function Customers() {
  return (
    <div id="customers">
      <Headers />
      <div className="box">
        <img src={Customer} alt="customer" width={1440} />
      </div>
    </div>
  );
}

export default Customers;
