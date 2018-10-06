import React, { Component } from "react";
import {Route} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData"
class Checkout extends Component {
  state = {
    ingrediens: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 2
    },
    totalPrice: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingrediens = {}, totalPrice = 0;
    for (let param of query.entries()) {
      if(param[0] === "price") {
        totalPrice = param[0]
      } else {
        ingrediens[[param[0]]] = +param[1];
      }
    }
    this.setState({ ingrediens, totalPrice });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace( '/checkout/contact-data' );
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingrediens={this.state.ingrediens}
        />

        <Route
          path={this.props.match.path + "/contact-data"}
          render={ (props) => (
            <ContactData ingrediens={this.state.ingrediens} price={this.state.totalPrice} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
