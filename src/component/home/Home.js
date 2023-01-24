import React, { useEffect, useState } from "react";
import "./Home.css";
import Venue from "./Venue";
import Faq from "./Faq";
import Contact from "./Contact";
import About from "./About";
import Brochure from "./Brochure";
import Timer from "./Timer";
import $ from "jquery";
import Video from "./Video";
import Dummy from "./Dummy";

// var index = 0;
// setInterval(() => {
//   index = (index + 1) % 3;
//   $(".slides").css("display", "none");
//   console.log($(".slides")[index])
//   $($(".slides")[index]).css("display", "block");

// }, 3000);

const Slider = () => {
  //   const bgImg=["img/slider-img-1.jpg","img/slider-img-2.jpg","img/slider-img-3.jpeg"]
  //   const[index, setIndex]=useState(0);
  //   {

  // }
  return (
    <div className="slider">
      {/* <img src="img/slider-img-1.jpg" alt="" className="slides" />
      <img src="img/slider-img-2.jpg" alt="" className="slides" />
      <img src="img/slider-img-3.jpeg" alt="" className="slides" /> */}
      <div className="content">
        <span>
          <h1>
            Intelligent Computing <br />
            Systems <br/> & <br/> Applications <br/>
            [ ICSA ]
          </h1>
          <h3>
            ( A N &nbsp; I N T E R N A T I O N A L &nbsp; C O N F E R E N C E )
          </h3>
          <h3></h3>
          <h2 className="">AUGUST 24, 2023</h2>
          <h4>Organised by:</h4>
          <h5>Academy of Technology,</h5>

          <h5>Hooghly, West Bengal, India</h5>
        </span>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <Slider />
      <Timer />
      <Brochure />
      <Video />
      <Dummy height="5rem" />
      <About />
      <Contact />
      <Faq />
      <Venue />
    </>
  );
};

export default Home;
