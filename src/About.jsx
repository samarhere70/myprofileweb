import React from "react";
import Web from "../src/images/img3.jpg";
import "./index.css";
import Comman from "./Comman";

const About = () => {
  return (
    <>
      <Comman
        name="Welcome to About page"
        imgsrc={Web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};
export default About;
