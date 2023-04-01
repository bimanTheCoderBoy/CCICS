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
import Speaker from "../Speaker/Speaker";
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
          <img src="img/conflogo1.png" style={{height: 120, width: 120, zIndex: 99999}}></img>
      <div className="content">
        <span>
          <h2 style={{fontWeight: 'normal'}}>4th International Conference on</h2>
          <h1>
            Intelligent Computing, Communication & Control 2023 [ ICIC3 ]
          </h1>
          <h2 style={{fontWeight: 'normal',display:"inline"}}>based on Conference Theme </h2>
          <h1 style={{display:"inline"}}>
            INTELLIGENT INTERNET OF THINGS <br/>
          </h1>
          <h4> In Association with</h4>
          <img src="img/CSI_Logo.png" style={{height: 100, width: 100, padding: 10}}></img>
          <img src="img/IEI_Logo.png" style={{height: 100, width: 100, padding: 10}}></img>
          <img src="img/IETE_Logo.png" style={{height: 100, width: 100, padding: 10}}></img>
          <img src="img/image4.jpeg" style={{height: 100, width: 100, padding: 10}}></img>


         
          <h3></h3>
          <h2>AUGUST 19-20, 2023</h2>
          <h3>
            ( H Y B R I D &nbsp; M O D E )
          </h3>
          <h4>Organised by:</h4>
          <h2 className="m-0">Academy of Technology</h2>
          <h5>Aedconagar, Adisaptagram, Hooghly,</h5>
          <h5>West Bengal - 712121</h5>
          {/* <h5 >in association with: <br /><span style={{fontWeight:"bold"}}>MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL</span></h5> */}
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
    
      <Speaker />
      
      <Contact />
      <Faq />
      <Venue />
    </>
  );
};

export default Home;
