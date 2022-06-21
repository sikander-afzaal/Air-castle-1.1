import React from "react";
import "./Solution.css";
import SolutionBox from "../../../Components/SolutionBox/SolutionBox";
import sol1 from "../../../Assets/SolutionImgs/sol1.svg";
import sol2 from "../../../Assets/SolutionImgs/sol2.svg";
import sol3 from "../../../Assets/SolutionImgs/sol3.svg";
import sol4 from "../../../Assets/SolutionImgs/sol4.svg";
import sol5 from "../../../Assets/SolutionImgs/sol5.svg";
import sol6 from "../../../Assets/SolutionImgs/sol6.svg";
import sol7 from "../../../Assets/SolutionImgs/sol7.svg";
function Solution() {
  const boxesData = [
    {
      img: sol1,
      head: "DAO",
      desc: "Decentralised Autonomous Organisations",
    },
    {
      img: sol2,
      head: "NFT",
      desc: "Decentralised Non-Fungible Tokens",
    },
    {
      img: sol3,
      head: "DeFi ",
      desc: "Decentralised Finance",
    },
    {
      img: sol4,
      head: "Tokens",
      desc: "Token modeling, token engineering and minting",
    },
    {
      img: sol5,
      head: "Governance",
      desc: "Decentralised Governance",
    },
    {
      img: sol6,
      head: "Dapps",
      desc: "Decentralised Apps",
    },
    {
      img: sol7,
      head: "Infrastructures",
      desc: "Decentralised Blockchain Infrastructures",
    },
  ];
  return (
    <div className="solution-cont">
      <div className="solution">
        <div className="left-solution">
          <h2 className="top-sub gest">our services</h2>
          <h1 className="main-head">Solutions</h1>
          <p className="desc">
            Aircastle is driven by the principles of making Web3 more accessible
            and inclusive by bringing the Web3 educators, builders,
            entrepreneurs and innovators into a decentralised governance
            structure.
          </p>
        </div>
        <div className="right-solution">
          {boxesData.map((elem, key) => {
            return (
              <SolutionBox
                img={elem.img}
                head={elem.head}
                desc={elem.desc}
                key={"sol" + key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Solution;
