import React from "react";
import Headers from "./Headers";
import Blogs from "../assets/Images/blog.png";
import Footer from "../assets/Images/footer.png";

function Blog() {
  return (
    <div id="blog">
      <Headers />
      <div className="box1">
        <img src={Blogs} alt="blog" width={1000} />
      </div>
      <div className="box2">
        <img src={Footer} alt="blog" width={1440} />
      </div>
    </div>
  );
}

export default Blog;
