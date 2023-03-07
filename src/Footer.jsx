import React from "react";
import linkedin from "./linkedin.png";
import insta from "./insta.png";
import twit from "./twit.png";
import git from "./git.png";

let Footer = () => (
  <footer>
    <div className="left">
      <p className="copyright">Made with ❤️ By Ravikant K.</p>
    </div>
    <div className="right">
      <div className="social">
        <div className="in socialItems">
          <img src={linkedin} alt="linkedin" className="socialIcons" />
        </div>
        <div className="insta socialItems">
          <img src={insta} alt="Instagram" className="socialIcons" />
        </div>
        <div className="twit socialItems">
          <img src={twit} alt="Twitter" className="socialIcons" />
        </div>
        <div className="github socialItems">
          <img src={git} alt="Github" className="socialIcons" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
