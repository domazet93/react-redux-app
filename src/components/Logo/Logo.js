import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";
import classed from "./Logo.css"
const logo = (props) => (
  <div className={classed.Logo}>
    <img src={burgerLogo} alt="myBurger" />
  </div>
)

export default logo;