import React from "react";
import "./AboutBox.css";
function AboutBox({ vid, order, sub, desc, desc2, head }) {
  return (
    <div className="about-box">
      <div className={`left-about ${order ? "order-about" : ""}`}>
        <video src={vid} playsInline autoPlay muted loop controls={false} />
      </div>
      <div className="right-about">
        <h2 className="gest top-sub">{sub}</h2>
        <h1 className="main-head">{head}</h1>
        <p className="desc">{desc}</p>
        <p className="desc">{desc2}</p>
      </div>
    </div>
  );
}

export default AboutBox;
