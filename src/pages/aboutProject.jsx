import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contents from "../component/about/content1";
import Content2 from "../component/about/content2";
import Content3 from "../component/about/content3";


const AboutProject = () => {
  return (
    <div>
        <Contents />
        <Content2 />
        <Content3 />  
    </div>
  );
};

export default AboutProject;
