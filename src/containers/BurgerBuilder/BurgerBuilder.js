import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1.5,
  bacon: 1,
  cheese: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingrediens: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  updatePurchaseState(ingrediens) {
    const sum = Object.values(ingrediens).reduce((prev, curr) => prev + curr);
    this.setState({
      purchasable: sum > 0
    });
  }

  addIngredientHandler = type => {
    const oldCountIngr = this.state.ingrediens[type];
    const updatedCount = oldCountIngr + 1;
    const updatedIngredients = { ...this.state.ingrediens };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingrediens: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCountIngr = this.state.ingrediens[type];
    if (oldCountIngr <= 0) {
      return;
    }
    const updatedCount = oldCountIngr - 1;
    const updatedIngredients = { ...this.state.ingrediens };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingrediens: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true })
    const order = {
      ingrediens: this.state.ingrediens,
      price: this.state.totalPrice,
      customer: {
        name: "Toni",
        city: "Dublin",
        country: "Ireland"
      },
      email: "test@test.com",
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => this.setState({ loading: false, purchasing: false })
    )
  };

  render() {
    const disabledInfo = {
      ...this.state.ingrediens
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        ingrediens={this.state.ingrediens}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingrediens={this.state.ingrediens} />
        <BuildControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
