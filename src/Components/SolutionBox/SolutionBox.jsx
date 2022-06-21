import React from "react";
import "./SolutionBox.css";
function SolutionBox({ img, head, desc }) {
  return (
    <div className="solution-box">
      <img src={img} alt="" />
      <h1>{head}</h1>
      <hr />
      <p>{desc}</p>
    </div>
  );
}

export default SolutionBox;
