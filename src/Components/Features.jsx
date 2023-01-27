import React from "react";
import Headers from "./Headers";
import App from "../assets/Images/App.png";

function Features() {
  return (
    <div id="features">
      <Headers />
      <h2>App features</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <h3>Full free chat</h3>
      <p className="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex container">
        <div className="box1 end">
          <i class="fa-solid fa-gift"></i>
          <h3>unlimiter features</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <i class="fa-solid fa-bezier-curve"></i>
          <h3>awsome ui design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="box1">
          <img src={App} alt="app" width={500} />
        </div>
        <div className="box1">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h3>iso & androind version</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <i class="fa-solid fa-eye"></i>
          <h3>retina ready greaphics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <i class="fa-solid fa-headset"></i>
      <h3 className="support">24/7 support by real pepole</h3>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Features;
