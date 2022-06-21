import React from "react";
import "./TeamBox.css";
import icon from "../../Assets/linkedin.svg";
function TeamBox({ img, expertise, name, url }) {
  return (
    <div className="teambox">
      <img src={img} alt="" className="team-img" />
      <h2>{name}</h2>
      <p>{expertise}</p>
      <a href={url} target={"blank"}>
        <img src={icon} alt="" className="icon" />
      </a>
    </div>
  );
}

export default TeamBox;
