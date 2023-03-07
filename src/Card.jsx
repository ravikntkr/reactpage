import React from "react";
import img1 from "./Cthumb/c1.png";

let Card = ({
  Ctitle = "Card1",
  Cbio = "I am card 1",
  Cimg = img1,
  Cprice = "Free",
  Oprice = "₹00",
}) => (
  <div className="card">
    <img src={Cimg} alt="" className="courseThumb" />
    <h1 className="cardTitle">{Ctitle}</h1>
    <p className="cardBio">{Cbio}</p>
    <p className="Cprice">
      {Cprice} <s className="Oprice"> {Oprice}</s>
    </p>
  </div>
);

export default Card;
