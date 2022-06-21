import React from "react";
import "./Eco.css";
import centerImg from "../../../Assets/eco.png";
import icon1 from "../../../Assets/icons/icon1.png";
import icon2 from "../../../Assets/icons/icon2.png";
import icon3 from "../../../Assets/icons/icon3.png";
import icon4 from "../../../Assets/icons/icon4.png";
import icon5 from "../../../Assets/icons/icon5.png";
function Eco() {
  return (
    <div className="eco">
      <div className="top-eco">
        <h2 className="top-sub gest">ecosystem</h2>
        <h1 className="main-head">Aircastle Ecosystem</h1>
       <!--- <p className="desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis
        </p>--->
      </div>
      <div className="eco-grid">
        <div className="col-div col-div1">
          <h2>People</h2>
          <ul className="col col1">
            <li>Serial entrepreneur</li>
            <li>Technologist</li>
            <li>Community builders</li>
            <li>Influencers</li>
            <li>Global reach</li>
            <li>Keynote speakers</li>
          </ul>
        </div>
        <div className="col-div col-div2">
          <h2>Knowledge</h2>
          <ul className="col col2">
            <li>Web3 innovators & early adopters</li>
            <li>Decentralised solution advisory</li>
            <li>DAO experts</li>
            <li>Academia</li>
            <li>Industrial</li>
            <li>Open source contributers</li>
          </ul>
        </div>

        <img src={centerImg} alt="" className="center-img" />
        <div className="col-div col-div3">
          <h2>Trusted by</h2>
          <ul className="col col3">
            <li className="border-right">WEF</li>
            <li>ING</li>
            <li className="border-right">Ethereum</li>
            <li>Sony</li>
            <li className="border-right">Hyperledger</li>
            <li>Deloitte</li>
            <li className="border-right">TU Delft</li>
            <li>EY</li>
            <li className="border-right">EU</li>
            <li>BMG</li>
            <li className="border-right">BCNL</li>
          </ul>
        </div>
        <div className="col-div col-div4">
          <h2>Tech</h2>
          <ul className="col col4">
            <li>
              <img src={icon1} alt="" />
              Ethereum
            </li>
            <li>
              <img src={icon2} alt="" />
              Polygon
            </li>
            <li>
              <img src={icon4} alt="" />
              Avalanche
            </li>
            <li>
              <img src={icon5} alt="" />
              Cosmos
            </li>
            <li>
              <img src={icon3} alt="" />
              Near
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Eco;
