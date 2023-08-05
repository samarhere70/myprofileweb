import React from "react";
import web from "../src/images/img2.png";
import "./index.css";
import Comman from "./Comman";

const Home = () => {
  return (
    <>
      <Comman
        name="Grow Your Skill's with"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};
export default Home;
