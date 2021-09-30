import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>About</p>
        <p>Advertising</p>
        <p>Business</p>
        <p>How Search works</p>
      </div>

      <div className="footer__right">
        <p>Privacy</p>
        <p>Terms</p>
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Footer;
