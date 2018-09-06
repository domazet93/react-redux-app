
import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;