import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Services} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
