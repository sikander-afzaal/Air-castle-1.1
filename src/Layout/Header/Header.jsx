import React, { useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
function Header() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
      } else {
        document.querySelector(".header").style.top = "-120px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <a href="mailto:remco@aircastle.xyz" target={"blank"} className="touch">
        Get in touch
      </a>
    </div>
  );
}

export default Header;
