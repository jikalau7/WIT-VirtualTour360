import Home from "../component/home/home";
import Project from "../component/home/Project";
import VirtualTour from "../component/home/virtualTour";
import React from "react";

const homePage = () => {
  return (
    <div>
      <Home />
      <Project />
      <VirtualTour />
    </div>
  );
};

export default homePage;