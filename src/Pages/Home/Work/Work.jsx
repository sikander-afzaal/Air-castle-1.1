import React from "react";
import "./Work.css";
import vid from "../../../Assets/what1.mp4";
function Work() {
  return (
    <div className="work">
      <h2 className="top-sub gest">What we do</h2>
      <video src={vid} playsInline autoPlay muted loop controls={false} />
      <h1 className="main-head">
        Aircastle exists to build the communities of tomorrow.
      </h1>
      <p className="desc">
        We collaborate with high impact brands and individuals to create
        stronger relationships with their fans and customers by building Web3
        solutions using decentralised technologies. Aircastle helps setting up
        every aspect: tech, UI/UX design, legal architecture, community building
        and marketing.
      </p>
    </div>
  );
}

export default Work;
