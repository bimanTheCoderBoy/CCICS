import React from "react";
import Heading from "../Heading";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Speaker.css";
import $ from "jquery";
import Generator from "../Committee/Generator";
import Data from "./Data";

const Speaker = () => {
  return (
    <div className="mt-5 container">
      <Heading>INVITED TALK BY</Heading>

      <div style={{"marginBottom": 100}}>
        <Generator data={Data} />
      </div>
    </div>
  );
};

export default Speaker;
