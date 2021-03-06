
import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";


class OrderSummary extends Component { 

  componentWillUpdate() {
    console.log("[OrderSummary] componentWillUpdate")
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map((ingr) => {
      return ( 
        <li key={ingr}>
          <span style={{ textTransform: "capitalize" }}>{ingr}: </span>
          {this.props.ingredients[ingr]}
        </li>
      )
    });
    return(
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary;