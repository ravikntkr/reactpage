import React from "react";
import "https://kit.fontawesome.com/cc22289122.js";
import Main from "./hero.png";

let Body = () => (
  <main className="hero">
    <div className="heroLeft">
      <h1 className="authorName">LearnCodeOnline</h1>
      <p className="authorBio">
        High Quality Course at Affordable prices. We are latest <br /> in tech
        and highest in quality.
      </p>
      <p className="authorBio">
        Trusted by <b>300,000</b> Student and Professionals.
      </p>
      <button className="LetsTalk cvBtn">
        Let's Talk <i className="fa-solid fa-headset btnIcon"></i>
      </button>
    </div>
    {/* Hero Right */}
    <div className="heroRight">
      <img src={Main} alt="MainImage" className="heroImage" />
    </div>
  </main>
);

export default Body;
