import React from "react";
import Headers from "./Headers";
import Phoneabout from "../assets/Images/phoneabout.png";

function About() {
  return (
    <div id="about">
      <Headers />
      <h2>About Our App</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </p>
      <div className="flex container">
        <div className="portion1">
          <img src={Phoneabout} alt="phone" width={300} />
        </div>
        <div className="portion2">
          <div className="box1">
            <div className="flex">
              <i class="fa-solid fa-circle-check"></i>
              <h3>Creative design</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            </p>
          </div>
          <div className="box1">
            <div className="flex">
              <i class="fa-solid fa-circle-check"></i>
              <h3>Easy to use</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            </p>
          </div>
          <div className="box1">
            <div className="flex">
              <i class="fa-solid fa-circle-check"></i>
              <h3>Best user experince</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
