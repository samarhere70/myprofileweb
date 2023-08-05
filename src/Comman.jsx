import React from "react";
import Web from "../src/images/img2.png";
import "./index.css";
import { NavLink } from "react-router-dom";

const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name">JavaScript</strong>
                  </h1>

                  <h2 className="my-3">We are the singnal of traffice</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img imgHome">
                  <img
                    src={props.imgsrc}
                    alt="slow internet"
                    className="img-fluid animated "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Comman;
