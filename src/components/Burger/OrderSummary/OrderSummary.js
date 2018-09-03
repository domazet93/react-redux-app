
import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingrediensSummary = Object.keys(props.ingrediens)
        .map((ingr) => {
          return ( 
            <li key={ingr}>
              <span style={{ textTransform: "capitalize" }}>{ingr}: </span>
              {props.ingrediens[ingr]}
            </li>
          )
        });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingrediens:</p>
      <ul>
        {ingrediensSummary}
      </ul>
      <p>Continue to checkout</p>
    </Aux>
  )
}

export default orderSummary;