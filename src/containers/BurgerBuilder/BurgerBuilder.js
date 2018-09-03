import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from  "../../components/Burger/Burger"
import BuildControls from "../../components/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: .5,
  meat: 1.5,
  bacon: 1,
  cheese: .7
}
class BurgerBuilder extends Component {

  state = {
    ingrediens: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseState(ingrediens) {
    const sum = Object.values(ingrediens)
                .reduce((prev, curr) => prev + curr)
    this.setState({
      purchasable: sum > 0
    })
  }

  addIngredientHandler = (type) => {
    const oldCountIngr = this.state.ingrediens[type];
    const updatedCount = oldCountIngr + 1;
    const updatedIngredients = { ...this.state.ingrediens }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingrediens: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCountIngr = this.state.ingrediens[type];
    if(oldCountIngr <= 0) { return; }
    const updatedCount = oldCountIngr - 1;
    const updatedIngredients = { ...this.state.ingrediens }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingrediens: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  render() {

    const disabledInfo = {
      ...this.state.ingrediens
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal><OrderSummary ingrediens={this.state.ingrediens}/></Modal>
        <Burger ingrediens={this.state.ingrediens} />
        <BuildControls           
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}/>
      </Aux>
    ) 
  }
}

export default BurgerBuilder;