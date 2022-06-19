import React from "react";
import SeanNattyCV from "../../assets/SeanNattyCV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={SeanNattyCV} download className="btn" >Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  );
};

export default CTA;
