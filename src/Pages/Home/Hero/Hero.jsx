import React from "react";
import "./Hero.css";
import vid from "../../../Assets/hero-vid.mp4";
import vid2 from "../../../Assets/hero-mobile-vid.mp4";
function Hero() {
  return (
    <div className="hero">
      <video
        className="desktop"
        src={vid}
        autoPlay
        muted
        loop
        controls={false}
      />
      <video
        className="mobile"
        src={vid2}
        autoPlay
        muted
        loop
        controls={false}
      />
      <div className="hero-text-div">
        <h1>
          Aircastle empowers premium brands to build high-value Web3 communities
        </h1>
        <p>
          Aircastle is a Social-first Web3 Community. We collaborate with
          high-impact brands and individuals to co-create stronger relationships
          with their fans and customers by building Web3 solutions
        </p>
        <a
          href="mailto:remco@aircastle.xyz"
          target={"blank"}
          className="touch mobile"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Hero;
