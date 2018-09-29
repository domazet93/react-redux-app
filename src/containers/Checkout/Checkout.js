import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {

  state = {
    ingrediens: {
      salad:1,
      meat:1,
      cheese:1,
      bacon: 2
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data")
  }

  render () {
      return (
          <div>
              <CheckoutSummary
                  checkoutCancelled={this.checkoutCancelledHandler}
                  checkoutContinued={this.checkoutContinuedHandler}
                  ingrediens={this.state.ingrediens}/>             
          </div>
      );
  }
}

export default Checkout;