import React, { Component } from "react";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ orders: fetchedOrders });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    let order = this.state.orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        totalPrice={order.totalPrice}
      />
    ));

    if (this.state.loading) {
      order = <Spinner />;
    }
    return <div>{order}</div>;
  }
}

export default withErrorHandler(Orders, axios);
