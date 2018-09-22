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

  render () {
      return (
          <div>
              <CheckoutSummary
                  ingrediens={this.state.ingrediens}/>             
          </div>
      );
  }
}

export default Checkout;