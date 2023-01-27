import React from "react";

function Info() {
  return (
    <>
      <div className="info flex">
        <div className="justify">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:Info@youremail.com">Info@youremail.com</a>
          <i class="fa-solid fa-phone"></i>
          <a>(480) 555-0103</a>
        </div>
        <div className="between">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </>
  );
}

export default Info;
