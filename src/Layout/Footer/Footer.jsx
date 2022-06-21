import React from "react";
import "./Footer.css";
import logo from "../../Assets/foot-logo.svg";
import twitter from "../../Assets/twitter.svg";
import insta from "../../Assets/insta.svg";
import discord from "../../Assets/discord.svg";
import linkedin from "../../Assets/linkedin.svg";
function Footer() {
  return (
    <div className="footer">
      <p>© 2022 Aircastle. All Rights Reserved</p>
      <img src={logo} alt="" className="logo-foot" />
      <div className="social-div">
       <!---<a href="..." target={"blank"}>
          <img src={discord} alt="" />
        </a>--->
        <a href="https://www.linkedin.com/company/aircastle-dao/" target={"blank"}>
          <img src={linkedin} alt="" />
        </a>
        <!---<a href="..." target={"blank"}>
          <img src={insta} alt="" />
        </a>--->
        <!---<a href="..." target={"blank"}>
          <img src={twitter} alt="" />
        </a>--->
      </div>
    </div>
  );
}

export default Footer;
